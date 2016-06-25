(function(){
	var app = angular.module('store',[]);
    app.controller('StoreController', function(){
       this.product = gem;
    }); 
    var gem = [{
    	name : 'Decathon',
    	price : 12.50,
    	description : 'Its got some discount too....',
    	hasPurchased: true ,
    	soldOut: true,
        reviews:[
        {
            stars: 5,
            body:"This product is a must buy",
            author: "Rehman"
        },
        {
            stars: 4,
            body:"Product is a worth the money",
            author: "Lucifier"
        }
        
        ]
    },
    {
    	name : 'hexathon',
    	price : 17,
    	description : 'Its got some discount too....',
    	hasPurchased: true ,
    	soldOut: true,
        reviews:[
        {
            stars: 5,
            body:"This product is a must buy",
            author: "Hanna"
        },
        {
            stars: 3,
            body:"Product is a worth the money",
            author: "Montanna"
        }
        
        ]    
    },
    {
    	name : 'pentathon',
    	price : 9.75,
    	description : 'Its got no discounts',
    	hasPurchased: true ,
    	soldOut: true,
        reviews:[
        {
            stars: 4,
            body:"This product is a must buy",
            author: "Deadpool"
        },
        {
            stars: 4,
            body:"Product is a worth the money",
            author: "Superman"
        }
        
        ]
    }
    ]
    app.controller('ReviewController', function(){
        this.review = {};
        this.addReview = function(product){
            product.reviews.push(this.review);
            this.review = {};
        };
    });
})();