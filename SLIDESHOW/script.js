// Modo estrito - pode usar variavel sem declaração
'use strict'

const images = [
    { 'id': '1', 'url': 'Photos HxH/resized_wallpaperflare.com_wallpaper (4).jpg' },
    { 'id': '2', 'url': 'Photos HxH/resized_wallpaperflare.com_wallpaper.jpg' },
    { 'id': '3', 'url': 'Photos HxH/resized_wallpaperflare.com_wallpaper (1).jpg' },
    { 'id': '4', 'url': 'Photos HxH/resized_wallpaperflare.com_wallpaper (2).jpg' },
    { 'id': '5', 'url': 'Photos HxH/resized_wallpaperflare.com_wallpaper (3).jpg' },
    { 'id': '6', 'url': 'Photos HxH/resized_wallpaperflare.com_wallpaper (6).jpg' },
    { 'id': '7', 'url': 'Photos HxH/resized_wallpaperflare.com_wallpaper (5).jpg' },


]

const containerItems = document.querySelector('#container-items')

const loadImagens = (images, container) => {
    images.forEach(image => {
        container.innerHTML += `
        <div class= 'item'>
        <img src= '${image.url}'>
        </div>
        `
    })
}

loadImagens(images, containerItems)

let items = document.querySelectorAll('.item')

const previous = () => {
    containerItems.appendChild(items[0])
    items = document.querySelectorAll('.item')
}


const next = () => {
    const lastItem = items[items.length - 1]
    containerItems.insertBefore(lastItem, items[0])
    items = document.querySelectorAll('.item')
    

}

document.querySelector('#previous').addEventListener('click', previous)

document.querySelector('#next').addEventListener('click', next)