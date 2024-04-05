// Fetch Request -> JSON placeholder

// https://jsonplaceholder.typicode.com/

// export async function getPhotos() {
//   fetch("https://jsonplaceholder.typicode.com/photos")
//     .then((response) => response.json())

//     .then((json) => {
//       let body = document.querySelector(".photoContainer");

//       console.log(json[0].thumbnailUrl);

//       let image = document.createElement("img");

//       image.setAttribute("src", json[0].thumbnailUrl);

//       body.append(image);
//     });
// }


export async function getPhotos() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/photos");
    const data = await response.json();
    
    
    let body = document.querySelector(".photoContainer");
    
    // Iterate over the first 20 photos
    for (let i = 0; i < 20 && i < data.length; i++) {
      // Create image element
      let image = document.createElement("img");
      // Set image source
      image.setAttribute("src", data[i].thumbnailUrl);
      // Append image to the container
      body.append(image);
    }
  } catch (error) {
    console.error("Error fetching photos:", error);
  }
}
