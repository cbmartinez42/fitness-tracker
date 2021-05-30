const router = require('express').Router();
const path = require('path')
const express = require('express')

router.get('/', async (req, res) => {
    // res.render('index.html');
    res.send('This is the homepage');
})

router.get('/exercise', async (req, res) => {
    // res.render('exercise.html')
    res.sendFile(path.join(__dirname, '../public/exercise.html'))
})

router.get('/stats', async (req, res) => {
    // res.render('stats.html')
    res.sendFile(path.join(__dirname, '../public/exercise.html'))
})
