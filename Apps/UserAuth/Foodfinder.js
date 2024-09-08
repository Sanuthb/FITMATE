
// export default function Foodfinder() {
//   const query = "3lb carrots and a chicken sandwich";
//   const apiKey = "FAvMWLYLocdkU7twghh02g==Bp6J5i7EuUoafPMZ";
//   fetch(`https://api.calorieninjas.com/v1/nutrition?query=${query}`, {
//     headers: {
//       "X-Api-Key": apiKey,
//     },
//   })
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error(`Request failed with status ${response.status}`);
//       }
//       return response.json();
//     })
//     .then((data) => {
//       console.log(data);
//     })
//     .catch((error) => {
//       console.error("Request failed:", error);
//     });

//   return {
//     query,
//   };
// }


// {"calories": 222.6, "carbohydrates_total_g": 0, "cholesterol_mg": 92, "fat_saturated_g": 3.7, "fat_total_g": 12.9, "fiber_g": 0, "name": "chicken", 
// "potassium_mg": 179, "protein_g": 23.7, "serving_size_g": 100, "sodium_mg": 72, "sugar_g": 0}
