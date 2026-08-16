export interface Film {
  year: string;
  title: string;
  role: string;
  notes?: string;
  director?: string;
  featured?: boolean;
}

export const filmography: Film[] = [
  {
    year: "2010",
    title: "Black Swan",
    role: "Lily",
    notes: "Golden Globe & SAG nominee",
    director: "Darren Aronofsky",
    featured: true,
  },
  {
    year: "2012",
    title: "Ted",
    role: "Lori Collins",
    notes: "Highest-grossing film",
    director: "Seth MacFarlane",
    featured: true,
  },
  {
    year: "2013",
    title: "Oz the Great and Powerful",
    role: "Theodora / Wicked Witch",
    director: "Sam Raimi",
  },
  {
    year: "2016",
    title: "Bad Moms",
    role: "Amy Mitchell",
    director: "Jon Lucas & Scott Moore",
    featured: true,
  },
  {
    year: "2017",
    title: "A Bad Moms Christmas",
    role: "Amy Mitchell",
    notes: "Executive Producer",
    director: "Jon Lucas & Scott Moore",
  },
  {
    year: "2022",
    title: "Luckiest Girl Alive",
    role: "Ani Fanelli",
    notes: "Producer",
    director: "Mike Barker",
    featured: true,
  },
  {
    year: "2024",
    title: "Goodrich",
    role: "Grace Goodrich",
    notes: "Executive Producer",
    director: "Hallie Meyers-Shyer",
  },
  {
    year: "2025",
    title: "Wake Up Dead Man: A Knives Out Mystery",
    role: "Chief Geraldine Scott",
    director: "Rian Johnson",
  },
  {
    year: "TBA",
    title: "Nightwatching",
    role: "Lee",
    notes: "Star & Producer",
    featured: true,
  },
  {
    year: "Ongoing",
    title: "Family Guy",
    role: "Voice of Meg Griffin",
    notes: "1999–present",
  },
];

export const featuredFilms = filmography.filter((film) => film.featured);
