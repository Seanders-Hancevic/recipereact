import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


const DirectoryView = (props) => (
    <div>
        <SearchForm value={props.value} handleChange={props.changeHandler} recipeSelect={props.recipeSelect} />
        {props.recipes.map((recipe, i) => <RecipeCard name={recipe.name} key={i} />)}

    </div>
)


const SearchForm = (props) => (
    <form>
        <input value={props.value} onChange={props.handleChange} />
        <button onClick={props.recipeSelect}>Search</button>
    </form>
);

const RecipeCard = (props) => (
    <div>
        <h1>Recipe Name</h1>
        <p>{props.name}</p>
    </div>
)

const DetailView = (props) => (

    <div>
 {props.recipes.filter((recipe) => <h2 key ={[0]}>{recipe.name}</h2>)}
        <h2>{props.name}</h2>
        {/* <p>{props.recipes.instructions}</p> */}
    </div>
)


class App extends React.Component {

    state = {
        recipes: [
            {
                id: 1,
                name: 'Turkey + stuff',
                ingredients: ['turkey', 'mustard', 'greens', 'celery', 'potato'],
                instructions: ['pre-heat over to 350', 'tickle the turkey', 'cut some celery']
            },
            {
                id: 2,
                name: 'Chicken Pot Pie',
                ingredients: ['1 pound skinless', 'boneless chicken breast halves - cubed', '1 cup sliced carrots', '1 cup frozen green peas', '1/2 cup sliced celery', '1/3 cup butter', '1/3 cup chopped onion', '1/3 cup all-purpose flour', '1/2 teaspoon salt', '1/4 teaspoon black pepper', '1/4 teaspoon celery seed', '1 3/4 cups chicken broth', '2/3 cup milk2'],
                instructions: ['Preheat oven to 425 degrees F (220 degrees C.)',
                    'In a saucepan, combine chicken, carrots, peas, and celery. Add water to cover and boil for 15 minutes. Remove from heat, drain and set aside.',
                    'In the saucepan over medium heat, cook onions in butter until soft and translucent. Stir in flour, salt, pepper, and celery seed. Slowly stir in chicken broth and milk. Simmer over medium-low heat until thick. Remove from heat and set aside.',
                    'Place the chicken mixture in bottom pie crust. Pour hot liquid mixture over. Cover with top crust, seal edges, and cut away excess dough. Make several small slits in the top to allow steam to escape.',
                    'Bake in the preheated oven for 30 to 35 minutes, or until pastry is golden brown and filling is bubbly. Cool for 10 minutes before serving']
            },
            {
                id: 3,
                name: 'Spaghetti',
                ingredients: ['16oz dry spaghetti', '1 Jar 24oz Pasta Sauce', '1lb ground beef', '2tbls minced garlic', '1 cup chopped onion', 'Parmesan Cheese (optional)'],
                instructions: ['Cook spaghetti noodles according to package directions.', 'Meanwhile, heat oil in large skillet over medium-high heat, Add onion and garlic', 'cook 5 minutes or until onion is tender, stirring frequently. Add beef; cook 7 minutes or until beef is crumbled and no longer pink, stirring occasionally. Drain.', 'Add pasta sauce to skillet; stir together. Simmer covered over medium-low heat 10 minutes or until hot. Drain spaghetti. Serve meat sauce with spaghetti. Sprinkle with cheese, if desired.']
            },
            {
                id: 4,
                name: 'Turkey Chili',
                ingredients: ['1 1/2 teaspoons olive oil', '1 pound ground turkey', '1 onion, chopped', '2 cups water', '1 (28 ounce) can canned crushed tomatoes', '1 (16 ounce) can canned kidney beans - drained, rinsed, and mashed', '1 tablespoon garlic, minced', '2 tablespoons chili powder', '1/2 teaspoon paprika', '1/2 teaspoon dried oregano', '1/2 teaspoon ground cayenne pepper', '1/2 teaspoon ground cumin', '1/2 teaspoon salt', '1/2 teaspoon ground black pepper'],
                instructions: ['Heat the oil in a large pot over medium heat. Place turkey in the pot, and cook until evenly brown.', 'Stir in onion, and cook until tender.', 'Pour water into the pot. Mix in tomatoes, kidney beans, and garlic. Season chili powder, paprika, oregano, cayenne pepper, cumin, salt, and pepper.', 'Bring to a boil. Reduce heat to low, cover, and simmer 30 minutes.']
            },
            {
                id: 5,
                name: 'Turkey Soup',
                ingredients: ['1 1/2 cups shredded cooked turkey', '4 cups vegetable broth', '1 (28 ounce) can whole peeled tomatoes', '1 (4 ounce) can chopped green chile peppers', '2 roma (plum) tomatoes, chopped', '1 onion, chopped', '2 cloves garlic, crushed', '1 tablespoon lime juice', '1/2 teaspoon cayenne pepper', '1/2 teaspoon ground cumin', 'salt and pepper to taste', '1 avocado - peeled, pitted and diced', '1/2 teaspoon dried cilantro', '1 cup shredded Monterey Jack cheese'],
                instructions: ['In a large pot over medium heat, combine turkey, broth, canned tomatoes, green chiles, fresh tomatoes, onion, garlic, and lime juice. Season with cayenne, cumin, salt, and pepper.', 'Bring to a boil, then reduce heat, and simmer 15 to 20 minutes.', 'Stir in avocado and cilantro, and simmer 15 to 20 minutes, until slightly thickened. Spoon into serving bowls, and top with shredded cheese.']
            },
            {
                id: 6,
                name: 'Whole Turkey',
                ingredients: ['1 (12 pound) whole turkey', '6 tablespoons butter, divided', '4 cups warm water', '3 tablespoons chicken bouillon', '2 tablespoons dried parsley', '2 tablespoons dried minced onion', '2 tablespoons seasoning salt'],
                instructions: ["Preheat oven to 350 degrees F (175 degrees C). Rinse and wash turkey. Discard the giblets, or add to pan if they are anyone's favorites.", 'Place turkey in a Dutch oven or roasting pan. Separate the skin over the breast to make little pockets. Put 3 tablespoons of the butter on both sides between the skin and breast meat. This makes for very juicy breast meat.', 'In a medium bowl, combine the water with the bouillon. Sprinkle in the parsley and minced onion. Pour over the top of the turkey. Sprinkle seasoning salt over the turkey.', 'Cover with foil, and bake in the preheated oven 3 1/2 to 4 hours, until the internal temperature of the turkey reaches 180 degrees F (80 degrees C). For the last 45 minutes or so, remove the foil so the turkey will brown nicely.']
            }
        ],

        searchVal: '',
        selectedRecipe: []

    }

    handleChange = (event) => {
        this.setState({ searchVal: event.target.value })
    }

    selectedRecipe = (event) => {
        event.preventDefault()
        const filteredRecipies = this.state.recipes.filter(recipe => recipe.name.includes(this.state.searchVal))
        this.setState({ selectedRecipe: filteredRecipies });
    }


    render() {
        const recipeRef = this.state.selectedRecipe
        return (
            <div>
                <DirectoryView recipes={recipeRef}
                    value={this.state.searchVal}
                    changeHandler={this.handleChange}
                    recipeSelect={this.selectedRecipe}
                />
                <DetailView recipes={recipeRef[0]} 
          
                />
            </div>
        )
    }

}

ReactDOM.render(<App />, document.getElementById('root'));


