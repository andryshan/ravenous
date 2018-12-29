const apiKey = 'E8Wo6vDh2Dh7J5h6jIiNlmcCPnJUsV9FqnMgTdZUXaqDV1KCqEJtkNoau7Tsns0Ynzt07I7z1Psvfg1ooS7b5TcxjFA0y6AgR3BsE1EZGQ46vGzJ4q7wQA28FHknXHYx';
const yelp = {
	searchYelp(term, location, sortBy){
		return fetch(`https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/
			https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
			headers: {
				Authorization: `Bearer ${apiKey}`
			},
		}).then((response) => {
			return response.json();
		}).then((jsonResponse) => {
			if(jsonResponse.businesses){
				return jsonResponse.businesses.map(((business) => {
					return {
						id: business.id,
						imageSrc: business.image_url,
						name: business.name,
						address: business.location.address1,
						city: business.location.city,
						state: business.location.state,
						zipCode: business.location.zip_code,
						category: business.categories[0].title,
						rating: business.rating,
						rewiewCount: business.rewiew_count
					}
				}));
			}
		})
	}
};