let cont = document.getElementById('root');
let root = ReactDOM.createRoot(cont);
const { BrowserRouter, Routes, Route, Link } = ReactRouterDOM;

let movieNum = 1;

root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/fav" element={<Fav />} />
        </Routes>
    </BrowserRouter>
);

function Home() {
    return (
        <div>
            <h1>Hello Home bro!</h1>
            <Link to="/fav">Go to Favorites</Link>
        </div>
    );
}

function Fav() {
    return (
        <div>
            <h1>Hello Favorites bro!</h1>
            <Link to="/">Go to Home</Link>
        </div>
    );
}