console.log("Main process working");

const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require("path");
const url = require("url");

let win,dimension, bgColor,frame;
function createWindow() {
    win = new BrowserWindow();
    dimension = new BrowserWindow({width:500, height:500, maxWidth:700});
    win = new BrowserWindow({backgroundColor:'#f90f90'});
    win = new BrowserWindow({backgroundColor:'#f60f60', frame:true});
    win.on('closed', ()=>{
        win = null;
    })
}

app.on('ready', createWindow);

app.on('window-all-closed', () =>{
    if(process.platform !== 'darwin') {
        app.quit()
    }
});

app.on('activate', () => {
    if(win == null) {
        createWindow();
    }
});


