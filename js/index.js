import data from "../data/recipes.json" assert { type: 'json' };

var jsonString = JSON.stringify(data);
var jsonResult = JSON.parse(jsonString);


const findObject = (obj = {}, key, value) => {
    const result = [];
    
    const recursiveSearch = (obj = {}) => {
        if (!obj || typeof obj !== 'object') { 
            return;
        };
    
        if (obj[key] === value){
            result.push(obj);
        };

        Object.keys(obj).forEach(function (k) {
            recursiveSearch(obj[k]);
        });
    } 

    recursiveSearch(obj);
    return result;
}

const populateIndexRecipes = (json = {}) => {
    if (!json || typeof json !== 'object') { 
        return;
    };

    json.recipes.forEach(obj => {
        
        populateRecipes(obj);
        
        /*
        Object.keys(obj).forEach(([key, value]) => {
            
        });
        */
    });
}


//populateRecipes();

//console.log(findObject(jsonResult, 'name', 'Lasagna'));
populateIndexRecipes(jsonResult);


/*
function populateRecipes() {
    
    jsonResult.recipes.forEach(obj => {
        Object.entries(obj).forEach(([key, value]) => {
            if(key == 'ingredients' || key == 'steps') {
                console.log(`${key}: `);
                for(var i = 0; i < value.length; i++) {
                    console.log(value[i]);
                }
            }
            else {
                console.log(`${key}: ${value}`);
            }
        });
        console.log('-------------------');
    });
}
*/

function populateRecipes(obj) {

    document.getElementById('recipeSection').innerHTML += 
                '            <div class="col mb-5">' +
                '                <div class="card h-100">' +
                '                    <img class="card-img-top" src="'+obj.image+'" alt="..." />' +
                '                    <!-- Recipe details-->' +
                '                    <div class="card-body p-4">' +
                '                        <div class="text-center">' +
                '                            <!-- Product name-->' +
                '                            <h5 class="fw-bolder">'+obj.name+'</h5>' +
                '                            <!-- Product Description -->' +
                '                            <p>'+obj.description+'</p>'+
                '                        </div>' +
                '                    </div>' +
                '                    <!-- Recipe actions-->' +
                '                    <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">' +
                '                        <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="recipes/lasagna.html">View recipe</a></div>' +
                '                    </div>' +
                '                </div>' +
                '            </div>';
}
