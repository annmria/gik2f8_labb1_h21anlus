const BookDetailedInfo = (details) =>  {
    let html = `<div class="book-list__details absolute border-neutral-800 border-2 bg-white right-20 rounded-[10px]" style="position: absolute; width: 10vw" id="bookDetail">
                <img src=${details.coverImage} alt="No image found" class="inline-block rounded-tl-lg rounded-tr-lg">
                <h1 class="text-gray-900 text-xl font-medium mb-2">${details.title}</h4>
                <p class="text-gray-700">Author: ${details.author}</p>
                <p class="text-gray-700">Release year: ${details.releaseDate}</p>
                <p class="text-gray-700">Pages: ${details.pages}</p>
              </div>`;
  
    return html;
  };