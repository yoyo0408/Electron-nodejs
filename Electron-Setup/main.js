const { app, BrowserWindow } = require('electron');

let win;
function createWindow() {
    win = new BrowserWindow(
        {
            width: 800,
            height: 600,
            webPreference: {
                nodeIntegration: true
            }
        });

    win.loadFile('index.html');

}


function createwindow_version2()
{
    win = new BrowserWindow(
        {
            width:800,
            height:600,
            webPreferences:
            {
                nodeIntegration:true
            }
        }
    );

    win.loadFile('index.html');
    win.webContents.openDevTools();

    win.on('closed',()=>
    {
        win = null;
    })
}

app.on('ready',createwindow_version2);
app.on('window-all-closed',()=>{
    if(process.platform !== 'darwin')
    {
        app.quit();
    }
})



app.on('active',()=>
{
    if(win == null)
    {
        createwindow_version2();
    }
}
);
