import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

interface TranslationField {
  key: string;
  path: string;
  en: string;
  vi: string;
}

const TranslationManager: React.FC = () => {
  const { i18n } = useTranslation();
  const [translations, setTranslations] = useState<TranslationField[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  
  // Function to flatten JSON object with path
  const flattenTranslations = (obj: any, path = '', result: TranslationField[] = []) => {
    for (const key in obj) {
      const newPath = path ? `${path}.${key}` : key;
      
      if (typeof obj[key] === 'object' && obj[key] !== null) {
        flattenTranslations(obj[key], newPath, result);
      } else {
        // Get the equivalent in the other language
        const enResources = i18n.getResourceBundle('en', 'translation');
        const viResources = i18n.getResourceBundle('vi', 'translation');
        
        const enValue = getNestedValue(enResources, newPath);
        const viValue = getNestedValue(viResources, newPath);
        
        result.push({
          key,
          path: newPath,
          en: typeof enValue === 'string' ? enValue : '',
          vi: typeof viValue === 'string' ? viValue : ''
        });
      }
    }
    return result;
  };
  
  // Helper to get nested value from object using path like "navbar.home"
  const getNestedValue = (obj: any, path: string) => {
    return path.split('.').reduce((prev, curr) => {
      return prev && prev[curr] ? prev[curr] : '';
    }, obj);
  };
  
  // Helper to set nested value in object using path
  const setNestedValue = (obj: any, path: string, value: string) => {
    const keys = path.split('.');
    const lastKey = keys.pop()!;
    const lastObj = keys.reduce((obj, key) => {
      return (obj[key] = obj[key] || {});
    }, obj);
    lastObj[lastKey] = value;
    return obj;
  };
  
  useEffect(() => {
    if (i18n.isInitialized) {
      const enResources = i18n.getResourceBundle('en', 'translation');
      const flattened = flattenTranslations(enResources);
      setTranslations(flattened);
    }
  }, [i18n.isInitialized]);
  
  const handleUpdateTranslation = (path: string, lang: 'en' | 'vi', value: string) => {
    // Update the local state
    setTranslations(prev => 
      prev.map(t => t.path === path ? { ...t, [lang]: value } : t)
    );
    
    // Get the current resource bundle
    const resources = i18n.getResourceBundle(lang, 'translation');
    
    // Create a new object with the updated translation
    const updatedResources = JSON.parse(JSON.stringify(resources));
    setNestedValue(updatedResources, path, value);
    
    // Update the resource bundle
    i18n.addResourceBundle(lang, 'translation', updatedResources, true, true);
  };
  
  const exportTranslations = () => {
    const enResources = i18n.getResourceBundle('en', 'translation');
    const viResources = i18n.getResourceBundle('vi', 'translation');
    
    const exportData = {
      en: enResources,
      vi: viResources
    };
    
    const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = 'translations.json';
    document.body.appendChild(a);
    a.click();
    
    // Cleanup
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };
  
  const filteredTranslations = translations.filter(t => 
    t.path.toLowerCase().includes(searchTerm.toLowerCase()) || 
    t.en.toLowerCase().includes(searchTerm.toLowerCase()) ||
    t.vi.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  if (!isAdmin) {
    return (
      <div className="fixed bottom-5 right-5 z-50">
        <button 
          onClick={() => setIsAdmin(true)}
          className="bg-primary text-white p-3 rounded-md shadow-lg flex items-center font-medium"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path d="M7.75 2.75a.75.75 0 00-1.5 0v1.258a32.987 32.987 0 00-3.599.278.75.75 0 10.198 1.487A31.545 31.545 0 018.7 5.545v7.644a25.85 25.85 0 01-6.23-.771.75.75 0 00-.26 1.477 27.35 27.35 0 006.49.805V17.5a.75.75 0 001.5 0v-2.8a27.35 27.35 0 006.491-.805.75.75 0 10-.26-1.477 25.85 25.85 0 01-6.23.771V5.545a31.545 31.545 0 015.851-.228.75.75 0 00.197-1.487 32.987 32.987 0 00-3.599-.278V2.75z" />
          </svg>
          Manage Translations
        </button>
      </div>
    );
  }
  
  return (
    <div className="fixed inset-0 bg-black/80 z-50 overflow-auto flex flex-col p-4">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-5xl mx-auto w-full">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Translation Manager</h2>
          <div className="flex items-center space-x-3">
            <button 
              onClick={exportTranslations}
              className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark"
            >
              Export JSON
            </button>
            <button 
              onClick={() => setIsAdmin(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
        
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search translations..."
            className="w-full p-3 border border-gray-300 rounded-md"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="overflow-auto max-h-[calc(100vh-240px)]">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50 sticky top-0">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/4">Key</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-3/8">English</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-3/8">Vietnamese</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredTranslations.map((translation, index) => (
                <tr key={translation.path} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {translation.path}
                  </td>
                  <td className="px-6 py-4 whitespace-normal">
                    <input
                      type="text"
                      value={translation.en}
                      className="w-full p-2 border border-gray-300 rounded-md"
                      onChange={e => handleUpdateTranslation(translation.path, 'en', e.target.value)}
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-normal">
                    <input
                      type="text"
                      value={translation.vi}
                      className="w-full p-2 border border-gray-300 rounded-md"
                      onChange={e => handleUpdateTranslation(translation.path, 'vi', e.target.value)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TranslationManager; 