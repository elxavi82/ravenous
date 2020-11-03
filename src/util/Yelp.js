// Client ID ZgTDbkK68ZbkhbreiXrp_w
const apiKey = 'NSnWV9l9XorC1hfaZTt-iXGCDP0JWYBu49HyoHwN4CWHJDNi57UW5owwfSL4HT71j3HL52IX54bGhlXJ7dERGKvqK8CdcjggBGn-bUVTDZKzUt1cCpwOgeQHeoigX3Yx';
let Yelp = {
    search(term, location, sortBy){
        console.log('enter yelp search');
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
        {
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        }).then( response => {
            return response.json();
        }).then( jsonResponse => {
            if(jsonResponse.businesses){
                return jsonResponse.businesses.map(business =>({
                        id: business.id,
                        imgSrc: business.image_url,
                        name: business.name,
                        address: business.location['address1'],
                        city: business.location['city'],
                        state: business.location['state'],
                        zipCode: business.location['postal_code'],
                        category: business.categories[0].title,
                        rating: business.rating,
                        reviewCount: business.review_count
                }));
            }
        });
    }
};

export default Yelp;
