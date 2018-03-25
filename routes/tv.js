var express = require('express');
var router = express.Router();

let tvCategories ={
    'samsang':{
        name: 'Samsang',
        link: '/tv/samsang',
        data: [
            {
                name: 'Samsang 55 inchy',
                imgLink: '/images/samsang_1.jpg',
                price: '100.000.000 VND',
                description: 'Lorem Ipsum',
            },
            {
                name: 'Samsang 43 inchy',
                imgLink: '/images/samsang_2.jpg',
                price: '14.000.000 VND',
                description: 'Lorem Ipsum',
                
            },
            {
                name: 'Samsang 32 inchy',
                imgLink: '/images/samsang_3.jpg',
                price: '6.000.000 VND',
                description: 'Lorem Ipsum',
                
            },
        ]
    },
    'soney':{
        name: 'Soney',
        link: '/tv/soney',
        data: [
            {
                name: 'Soney 63 inchy',
                imgLink: '/images/soney_1.jpg',
                price: '300.000.000 VND',
                description: 'Lorem Ipsum',
            },
            {
                name: 'Soney 43 inchy',
                imgLink: '/images/soney_2.jpg',
                price: '20.000.000 VND',
                description: 'Lorem Ipsum',
                
            },
            {
                name: 'Soney 32 inchy',
                imgLink: '/images/soney_3.jpg',
                price: '7.000.000 VND',
                description: 'Lorem Ipsum',
                
            },
        ]
    },
    'lifesbad':{
        name: 'Lifesbad',
        link: '/tv/lifesbad',
        data: [
            {
                name: 'Life"s Bad 65 inchy',
                imgLink: '/images/lifesbad_1.jpg',
                price: '400.000.000 VND',
                description: 'Lorem Ipsum',
            },
            {
                name: 'Life"s Bad 49 inchy',
                imgLink: '/images/lifesbad_2.jpg',
                price: '20.000.000 VND',
                description: 'Lorem Ipsum',
                
            },
            {
                name: 'Life"s Bad 32 inchy',
                imgLink: '/images/lifesbad_3.jpg',
                price: '5.000.000 VND',
                description: 'Lorem Ipsum',
                
            },
        ]
    },
}
/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('tv',{
      tvCategories: tvCategories,
    });

});
router.get('/:tvbrand',function(req,res,n){
    res.status(200).send({
        data: tvCategories[req.params.tvbrand].data
    });
})

module.exports = router;