import './App.css';
function App() {

  return (
    <div className="App">
      <main >
        <div className='container-pdf'>
          <iframe
            src="/menubonitosygorditos.pdf"
            className="pdf-iframe"
            width="100%"
            height="600px"
            style={{ border: 'none' }}
          >
            Este navegador no soporta iframes.
          </iframe>
        </div>
      </main>
    </div>

  );
}

export default App;
