import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import logo from './assets/cutlery-circle.png'


const Header = (props) => (
    <div className='header'>
        <img className ='logo' src={logo} alt='Cutlery'></img>
        <h1 className ='headerText'>Recipe App</h1>
    </div>
 )

const DirectoryView = (props) => (
    <div>
        <SearchForm value={props.value} handleChange={props.changeHandler} clickHandler={props.clickHandler} recipeSelect={props.recipeSelect} />
        {props.recipes.map((recipe, i) => <RecipeCard name={recipe.name} id={recipe.id} clickHandler={props.recipeHandler} key={i} />)}

    </div>
)


const SearchForm = (props) => (
    <form className = 'search'>
        <input className ='inputField' value={props.value} onChange={props.handleChange} />
        <button className = 'searchButton' onClick={props.recipeSelect}>Search</button>
    </form>
);

const RecipeCard = (props) => (
    <div>
 <div className = 'recipeCard'>
        <h1 onClick={() => props.clickHandler(props.id)}>{props.name}</h1>
    </div>
    </div>
   
)

const DetailView = (props) => (

    <div className ='container'>
        <h2>{props.recipes.name}</h2>
        <div className="">
            <ul>
                {props.recipes.ingredients.map((ingredient, i) => <li key={i}>{ingredient}</li>)}
            </ul>
        </div>
        <div className="">
            <ol>
                {props.recipes.instructions.map((instruction, i) => <li key={i}>{instruction}</li>)}
            </ol>
        </div>
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
            },
            {
                id: 7,
                name: 'Turkey Mayhem',
                ingredients: ['Turkey', 'Mustard', 'Greens', 'Celery', 'Potato'],
                instructions: ['Pre-heat over to 350 degrees', 'Tickle the turkey', 'Cut some celery']
            },
            {
                id: 8,
                name: 'Mac and Cheese',
                ingredients: ['Mac', 'Cheese'],
                instructions: ['Put the mac in the cheese', 'Swish it around', 'Bake for 15 minutes at 350 degrees']
            },
            {
                id: 9,
                name: 'Spanakopita',
                ingredients: ['Olive oil', 'Onion', 'Garlic', 'Spinach'],
                instructions: ['Put the stuff in a bowl', 'Cook the stuff']
            },
            {
                id: 10,
                name: 'Vasilopita',
                ingredients: ['Flower', 'Baking Soda', 'Butter', 'Sugar', 'Eggs'],
                instructions: ['Throw everything in the air and hope it comes together', 'Knead the bread', 'Show the bread some love', 'Bake it at 400 degrees'],
            },
            {
                id: 11,
                name: 'Ceviche',
                ingredients: ['tilapia', 'cilantro', 'tomatoes', 'yellow onion', 'limes', 'jalapeno', 'salt'],
                instructions: ['Dice all tilapia and place in a bowl.','Squeeze lime juice over all the tilapia (enough to cover it) and add salt.', 'Let the tilapia sit in lime juice for about 2 hrs.', 'Dice all other ingredients and set aside.',  'After 2 hrs, mix tilapia and diced ingredients.', 'Enjoy with tortilla chips or tostadas :)']
               },
               {
                id: 12,
                name: 'Tofu Lasagna',
                ingredients: ['tofu', 'cheese', 'noodles', 'tomato sauce',],
                instructions: ['pre-heat oven to 400', 'marinade tofu to taste', 'cook noodles', 'mix tomato sauce and tofu', 'put a layer of tofu/sauce in the pan', 'put a layer of noodles', 'repeat until all ingredients are used', 'We dont waste in this house', 'cook until bubbling'],
            },
            {
                id:13,
                name: 'Tofu Potpie',
                ingredients: ['tofu', 'pie crust', 'assorted veggies', 'gravy sauce'],
                instructions: ['pre-heat oven to 400', 'line pan with pie crust', 'mix tofu, veggies and gravy sauce', 'put tofu mix in pie crust', 'cook until golden brown'],
            },
            { id: 14, 
                name: 'Turkey Tacos', 
                ingredients: ['1 lb ground turkey', '1 head romaine lettuce', '1 avacado', '1 red bell pepper chopped', '1 bunch green onions', '1 tbsp chili powder', '1/4 tsp garlic powder', '1/8 tsp onion powder', '1/4 tsp crushed red pepper flakes', '1/4 tsp dried oregano', '1/2 tsp paprika', '1/2 tsp ground cumin', '1/2 tsp sea salt', '1/2 tsp black pepper', 'cilantro for garnish'], 
                instructions: ['1. Brown turkey in skillet and add spices.', '2. Separate Romaine lettuce leaves and layer with taco meat, green onions, red pepper, sliced avacado and cilantro.', '3. Serve with hot sauce or salsa if desired.'] 
              },
        ],

        searchVal: '',
        selectedRecipe: [],
        chosenRecipe: {
            id: '',
            name: '',
            ingredients: [],
            instructions: []
        }

    }

    handleChange = (event) => {
        this.setState({ searchVal: event.target.value })
    }

    selectedRecipe = (event) => {
        event.preventDefault()
        const filteredRecipies = this.state.recipes.filter(recipe => recipe.name.toLowerCase().includes(this.state.searchVal.toLowerCase()))
        this.setState({ selectedRecipe: filteredRecipies });
    }

    chooseRecipe = (id) => {
        this.setState({ chosenRecipe: this.state.recipes.find(recipe => recipe.id === id)})
    }

    render() {
        const recipeRef = this.state.selectedRecipe
        return (
            <div>
                <Header />
                <div className ='cardContainer'>
                    <DirectoryView
                        recipes={recipeRef}
                        value={this.state.searchVal}
                        changeHandler={this.handleChange}
                        recipeSelect={this.selectedRecipe} 
                        clickHandler={this.selectRecipes} 
                        recipeHandler={this.chooseRecipe}
                    />
                </div>
                <div className ='detailContainer'>
                    <DetailView recipes={this.state.chosenRecipe}
                    />
                </div>
            </div>
        )
 }
}

ReactDOM.render(<App />, document.getElementById('root'));


