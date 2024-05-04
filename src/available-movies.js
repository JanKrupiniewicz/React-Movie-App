import shawshankRedemption from "./assets/shawshank-redemption.png";
import godfather from "./assets/godfather.png";
import darkKnight from "./assets/dark-knight.png";
import pulpFiction from "./assets/pulp-fiction.png";
import matrix from "./assets/matrix.png";
import inception from "./assets/inception.png";

const shawshankRedemptionImage = {
    src: shawshankRedemption,
    alt: "The Shawshank Redemption"
};

const godfatherImage = {
    src: godfather,
    alt: "The Godfather"
};

const darkKnightImage = {
    src: darkKnight,
    alt: "The Dark Knight"
};

const pulpFictionImage = {
    src: pulpFiction,
    alt: "Pulp Fiction"
};

const matrixImage = {
    src: matrix,
    alt: "The Matrix"
};

const inceptionImage = {
    src: inception,
    alt: "Inception"
};

export const AVAILABLE_MOVIES = [
    {
        id: 1,
        title: "The Shawshank Redemption",
        image: shawshankRedemptionImage,
        rating: 9.3,
        genre: "Drama",
        releaseDate: "14 October 1994",
        description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency." 
    },
    {
        id: 2,
        title: "The Godfather",
        image: godfatherImage,
        rating: 9.2,
        genre: "Crime, Drama",
        releaseDate: "24 March 1972",
        description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son." 
    },
    {
        id: 3,
        title: "The Dark Knight",
        image: darkKnightImage,
        rating: 9.0,
        genre: "Action, Crime, Drama",
        releaseDate: "18 July 2008",
        description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice." 
    },
    {
        id: 4,
        title: "Pulp Fiction",
        image: pulpFictionImage,
        rating: 8.9,
        genre: "Crime, Drama",
        releaseDate: "14 October 1994",
        description: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption."
    },
    {
        id: 5,
        title: "The Matrix",
        image: matrixImage,
        rating: 8.7,
        genre: "Action, Sci-Fi",
        releaseDate: "31 March 1999",
        description: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers."
    },
    {
        id: 6,
        title: "Inception",
        image: inceptionImage,
        rating: 8.8,
        genre: "Action, Adventure, Sci-Fi",
        releaseDate: "16 July 2010",
        description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O."
    }
];