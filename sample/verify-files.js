// File verification script for GitHub Pages deployment
// This script checks if all required files are accessible

const filesToVerify = [
    // Core GDJS files
    'gd.js',
    'data.js',
    'logger.js',
    'inputmanager.js',
    'fullscreen.js',
    'fullscreen.css',
    
    // Library files
    'libs/jshashtable.js',
    'libs/rbush.js',
    
    // Pixi renderer files
    'pixi-renderers/pixi.js',
    'pixi-renderers/runtimegame-pixi-renderer.js',
    
    // Code files
    'code0.js',
    'code1.js',
    'code2.js',
    
    // Sample extension files
    'Extensions/3D/Scene3DTools.js',
    'Extensions/TextObject/textruntimeobject.js'
];

function verifyFiles() {
    console.log('🔍 Verifying game files...');
    const results = [];
    let errors = 0;
    
    filesToVerify.forEach(file => {
        fetch(file)
            .then(response => {
                if (response.ok) {
                    console.log(`✅ ${file} - OK`);
                } else {
                    console.error(`❌ ${file} - Error ${response.status}`);
                    errors++;
                }
                results.push({file, status: response.status, ok: response.ok});
            })
            .catch(error => {
                console.error(`❌ ${file} - Network Error:`, error);
                errors++;
                results.push({file, error: error.message, ok: false});
            });
    });
    
    setTimeout(() => {
        if (errors === 0) {
            console.log('🎉 All files verified successfully!');
        } else {
            console.log(`⚠️ ${errors} files have issues. Check console for details.`);
        }
    }, 3000);
}

// Auto-run verification if this script is loaded
if (typeof window !== 'undefined') {
    window.verifyGameFiles = verifyFiles;
    console.log('File verification ready. Run verifyGameFiles() to check all files.');
}