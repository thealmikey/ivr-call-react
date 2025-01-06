import React, { useState } from 'react';
import Dialer from './components/Dialer';
import ResponseEditor from './components/ResponseEditor';
import PreviewPanel from './components/PreviewPanel';
import Breadcrumb from './components/BreadCrumb';

const App: React.FC = () => {
  const [currentKey, setCurrentKey] = useState('');
  const [currentResponse, setCurrentResponse] = useState('');
  const [responses, setResponses] = useState<Record<string, string>>({});
  const [path, setPath] = useState<string[]>(['Main Menu']);

  const handleKeyPress = (key: string) => {
    setCurrentKey(key);
    setCurrentResponse(responses[key] || '');
    const newPath = [...path, `Pressed ${key} (${key} Menu)`];
    setPath(newPath);
  };

  const handleSaveResponse = (key: string, response: string) => {
    setResponses((prev) => ({
      ...prev,
      [key]: response,
    }));
    setCurrentKey('');
    setCurrentResponse('');
  };

  const handleEditResponse = (key: string, response: string) => {
    setCurrentKey(key);
    setCurrentResponse(response);
  };

  const handleDeleteResponse = (key: string) => {
    setResponses((prev) => {
      const updated = { ...prev };
      delete updated[key];
      return updated;
    });
  };

  return (
    <div>
      <h1>IVR Response Customizer</h1>
      <Breadcrumb path={path} />
      <Dialer onKeyPress={handleKeyPress} />
      {currentKey && (
        <ResponseEditor
          currentKey={currentKey}
          onSave={handleSaveResponse}
        />
      )}
      <PreviewPanel
        responses={responses}
        onEdit={handleEditResponse}
        onDelete={handleDeleteResponse}
      />
    </div>
  );
};

export default App;
