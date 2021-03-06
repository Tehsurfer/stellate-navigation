// index.js - Loads file structure and links the html elements to corresponding s3 urls

const TreeView = require('js-treeview')

function FileTreeNavigation(targetDiv){ 
    var s3path = 'https://mapcore-bucket1.s3-us-west-2.amazonaws.com/ISAN/csv-data/stellate/'
    var fileStructureUrl = 'https://jsonstorage.net/api/items/stellate-file-structure'
    var treeData = undefined

    fetch(fileStructureUrl).then(response => {
        response.json().then(json => {
            treeData = json['data']
        bootDemo()
        })
    })

    function bootDemo() {
        var tree = new TreeView([treeData], targetDiv) // Create our directory tree navigation
        tree.on('select', (ev) => {
            url = s3path + ev.data.path
            plotsvy.clearChart()
            plotsvy.openCSV(url)
        })
    }

}

exports.FileTreeNavigation = FileTreeNavigation


