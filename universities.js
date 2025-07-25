// University data with names and corresponding slugs
export const universities = [
  { name: "Harvard University", slug: "harvard-university" },
  { name: "Stanford University", slug: "stanford-university" },
  { name: "Massachusetts Institute of Technology", slug: "massachusetts-institute-of-technology" },
  { name: "University of California, Berkeley", slug: "university-of-california-berkeley" },
  { name: "Yale University", slug: "yale-university" },
  { name: "Princeton University", slug: "princeton-university" },
  { name: "Columbia University", slug: "columbia-university" },
  { name: "University of Chicago", slug: "university-of-chicago" },
  { name: "University of Pennsylvania", slug: "university-of-pennsylvania" },
  { name: "California Institute of Technology", slug: "california-institute-of-technology" },
  { name: "Duke University", slug: "duke-university" },
  { name: "Johns Hopkins University", slug: "johns-hopkins-university" },
  { name: "Northwestern University", slug: "northwestern-university" },
  { name: "Dartmouth College", slug: "dartmouth-college" },
  { name: "Brown University", slug: "brown-university" },
  { name: "Vanderbilt University", slug: "vanderbilt-university" },
  { name: "Rice University", slug: "rice-university" },
  { name: "Washington University in St. Louis", slug: "washington-university-in-st-louis" },
  { name: "Cornell University", slug: "cornell-university" },
  { name: "University of Notre Dame", slug: "university-of-notre-dame" },
  { name: "University of California, Los Angeles", slug: "university-of-california-los-angeles" },
  { name: "Emory University", slug: "emory-university" },
  { name: "University of California, San Diego", slug: "university-of-california-san-diego" },
  { name: "Carnegie Mellon University", slug: "carnegie-mellon-university" },
  { name: "University of Virginia", slug: "university-of-virginia" },
  { name: "Georgetown University", slug: "georgetown-university" },
  { name: "University of Michigan", slug: "university-of-michigan" },
  { name: "University of Southern California", slug: "university-of-southern-california" },
  { name: "New York University", slug: "new-york-university" },
  { name: "Tufts University", slug: "tufts-university" },
  { name: "University of North Carolina at Chapel Hill", slug: "university-of-north-carolina-at-chapel-hill" },
  { name: "Boston College", slug: "boston-college" },
  { name: "Boston University", slug: "boston-university" },
  { name: "Brandeis University", slug: "brandeis-university" },
  { name: "Case Western Reserve University", slug: "case-western-reserve-university" },
  { name: "College of William & Mary", slug: "college-of-william-mary" },
  { name: "Georgia Institute of Technology", slug: "georgia-institute-of-technology" },
  { name: "Lehigh University", slug: "lehigh-university" },
  { name: "Northeastern University", slug: "northeastern-university" },
  { name: "Rensselaer Polytechnic Institute", slug: "rensselaer-polytechnic-institute" },
  { name: "Tulane University", slug: "tulane-university" },
  { name: "University of California, Davis", slug: "university-of-california-davis" },
  { name: "University of California, Irvine", slug: "university-of-california-irvine" },
  { name: "University of California, Santa Barbara", slug: "university-of-california-santa-barbara" },
  { name: "University of Florida", slug: "university-of-florida" },
  { name: "University of Georgia", slug: "university-of-georgia" },
  { name: "University of Illinois at Urbana-Champaign", slug: "university-of-illinois-at-urbana-champaign" },
  { name: "University of Rochester", slug: "university-of-rochester" },
  { name: "University of Texas at Austin", slug: "university-of-texas-at-austin" },
  { name: "University of Washington", slug: "university-of-washington" },
  { name: "University of Wisconsin-Madison", slug: "university-of-wisconsin-madison" },
  { name: "Wake Forest University", slug: "wake-forest-university" },
  { name: "Pepperdine University", slug: "pepperdine-university" },
  { name: "Syracuse University", slug: "syracuse-university" },
  { name: "University of Miami", slug: "university-of-miami" },
  { name: "Villanova University", slug: "villanova-university" },
  { name: "Fordham University", slug: "fordham-university" },
  { name: "Penn State University", slug: "penn-state-university" },
  { name: "University of Connecticut", slug: "university-of-connecticut" },
  { name: "University of Delaware", slug: "university-of-delaware" },
  { name: "University of Maryland", slug: "university-of-maryland" },
  { name: "Virginia Tech", slug: "virginia-tech" }
];

// Function to filter universities based on search query
export const filterUniversities = (query) => {
  if (!query) return [];
  
  const lowercaseQuery = query.toLowerCase();
  return universities.filter(university =>
    university.name.toLowerCase().includes(lowercaseQuery)
  ).slice(0, 10); // Limit to 10 results for better UX
};

