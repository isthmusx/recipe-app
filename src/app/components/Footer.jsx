import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer className="footer bg-secondary text-base-content p-10">
            <aside>
                <div className="flex-shrink-0 mt-2 md:mt-0">
                    <a href="/" className="text-2xl font-libre-baskerville text-primary">Crave</a>
                </div>
                <p>
                All your favorite recipes in one place.
                <br />
                Discover a world of delicious and diverse cuisines from every corner of the globe.
                <br />
                With easy-to-follow instructions, ingredient lists, and step-by-step guidance, cooking your next meal has never been easier. 
                <br />
                &copy; {new Date().getFullYear()} CRAVE. All rights reserved.
                </p>
            </aside>
            <nav>
                <h6 className="footer-title">Sections</h6>
                <a className="link link-hover" href="#home">Home</a>
                <a className="link link-hover" href="#recipes">Popular Recipes</a>
                <a className="link link-hover"href="#cuisines">Explore Cuisines</a>
                
            </nav>
            <nav>
                <h6 className="footer-title">Resources</h6>
                <a className="link link-hover" href="https://spoonacular.com/food-api" target='blank'>Spoonacular API</a>
                <a className="link link-hover" href="https://vercel.com/" target='blank'>Vercel</a>
                <a className="link link-hover" href="https://alhaddi-portfolio.vercel.app/" target='blank'>John Paul Al-haddi</a>
            </nav>
            
        </footer>
    </div>
  )
}

export default Footer