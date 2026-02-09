import React from "react";
import Card from "./components/card";



function App() {


  const infoJob = [
  {
    logo: "https://imgs.search.brave.com/e_Nuk6_IJRzC7cG8hQlHRgCuoA9IsKhyblm5PYgXT5I/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNzIv/Njc4LzI2MS9zbWFs/bC9nb29nbGUtYXBw/LWxvZ28taWNvbi1m/cmVlLXBuZy5wbmc",
    jobTitle: "Software Engineer I (Entry-Level)",
    companyName: "Google (Alphabet)",
    datePosted: "2025-12-01",
    jobType: "Full-Time",
    remote: false,
    experienceLevel: "Entry",
    salary: "$188,000/year",
    salaryPeriod: "yearly",
    jobLocation: "USA (Hybrid/On-site)"
  },
  {
    logo: "https://imgs.search.brave.com/-QlnopsS72o8z4m37MBvznkKqNpLr4D87VV3CRwrBjU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAyLzk0LzU0LzA3/LzM2MF9GXzI5NDU0/MDcyMl9WSXdTV3ly/VTZxNzgxU2tIV1Ns/elVEWGpmb3VSbGo0/Ny5qcGc",
    jobTitle: "Software Development Engineer II",
    companyName: "Amazon",
    datePosted: "2025-11-20",
    jobType: "Full-Time",
    remote: false,
    experienceLevel: "Mid-Level",
    salary: "$225,000/year",
    salaryPeriod: "yearly",
    jobLocation: "USA (On-site/Hybrid)"
  },
  {
    logo: "https://imgs.search.brave.com/b2Pr0jt8kcxpoNmCHIGqA84IF-3D6_K3xlp8WBbj-jI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjYv/MTM1LzMyMC9zbWFs/bC9tZXRhLXNvY2lh/bC1tZWRpYS1zeW1i/b2wtbG9nby1kZXNp/Z24taWxsdXN0cmF0/aW9uLWZyZWUtdmVj/dG9yLmpwZw",
    jobTitle: "Software Engineer",
    companyName: "Meta (Facebook)",
    datePosted: "2025-10-15",
    jobType: "Full-Time",
    remote: false,
    experienceLevel: "Mid-Level",
    salary: "$261,000/year",
    salaryPeriod: "yearly",
    jobLocation: "USA (Hybrid/On-site)"
  },
  {
    logo: "https://imgs.search.brave.com/e_Nuk6_IJRzC7cG8hQlHRgCuoA9IsKhyblm5PYgXT5I/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNzIv/Njc4LzI2MS9zbWFs/bC9nb29nbGUtYXBw/LWxvZ28taWNvbi1m/cmVlLXBuZy5wbmc",
    jobTitle: "Senior Software Engineer (L6)",
    companyName: "Google (Alphabet)",
    datePosted: "2025-09-10",
    jobType: "Full-Time",
    remote: false,
    experienceLevel: "Senior",
    salary: "$480,000/year",
    salaryPeriod: "yearly",
    jobLocation: "USA (On-site)"
  },
  {
    logo: "https://imgs.search.brave.com/u1Uqc8jkRSSmpNDivzHqVvO5f5q5XbyBCzw3_wOuW_I/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc2Vla2xvZ28u/Y29tL2xvZ28tcG5n/LzQ1LzIvbmV0Zmxp/eC1sb2dvLXBuZ19z/ZWVrbG9nby00NTE5/ODEucG5n",
    jobTitle: "Senior Software Engineer",
    companyName: "Netflix",
    datePosted: "2025-11-01",
    jobType: "Full-Time",
    remote: false,
    experienceLevel: "Senior",
    salary: "$550,00/year",
    salaryPeriod: "yearly",
    jobLocation: "USA (Remote-possible)",
  },
  {
    logo: "https://imgs.search.brave.com/HVpshM7xBCkRjkdx1OnhD6N2835KWcOXoV0dpcdrHxw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2I2LzMx/LzkzL2I2MzE5MzM0/Zjg5NTIzNDM0Mzhi/M2YxNGVlMTI4N2Yz/LmpwZw",
    jobTitle: "Machine Learning Engineer",
    companyName: "Apple",
    datePosted: "2025-12-05",
    jobType: "Full-Time",
    remote: false,
    experienceLevel: "Mid-Level",
    salary: "$174,000/year",
    salaryPeriod: "yearly",
    jobLocation: "USA (On-site)"
  },
  {
    logo: "https://imgs.search.brave.com/-QlnopsS72o8z4m37MBvznkKqNpLr4D87VV3CRwrBjU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAyLzk0LzU0LzA3/LzM2MF9GXzI5NDU0/MDcyMl9WSXdTV3ly/VTZxNzgxU2tIV1Ns/elVEWGpmb3VSbGo0/Ny5qcGc",
    jobTitle: "Principal Software Engineer",
    companyName: "Amazon",
    datePosted: "2025-10-22",
    jobType: "Full-Time",
    remote: false,
    experienceLevel: "Principal",
    salary: "$657,000/year",
    salaryPeriod: "yearly",
    jobLocation: "USA (On-site)"
  },
  {
     logo: "https://imgs.search.brave.com/b2Pr0jt8kcxpoNmCHIGqA84IF-3D6_K3xlp8WBbj-jI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjYv/MTM1LzMyMC9zbWFs/bC9tZXRhLXNvY2lh/bC1tZWRpYS1zeW1i/b2wtbG9nby1kZXNp/Z24taWxsdXN0cmF0/aW9uLWZyZWUtdmVj/dG9yLmpwZw",
    jobTitle: "Senior Data Scientist",
    companyName: "Meta (Facebook)",
    datePosted: "2025-11-30",
    jobType: "Full-Time",
    remote: false,
    experienceLevel: "Senior",
    salary: "$380,000/year",
    salaryPeriod: "yearly",
    jobLocation: "USA (Hybrid/On-site)"
  }
];

  const dateCalculate = (date) => {

    const dateString = date;

    // Split the string manually (YYYY-MM-DD)
    const [year, month, day] = dateString.split("-").map(Number);

    // Create a Date object (month is 0-indexed!)
    const pastDate = new Date(year, month - 1, day);

    // Get today
    const today = new Date();

    // Reset time to avoid fractional day errors
    pastDate.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);

    // Calculate difference in milliseconds
    const diffMs = today - pastDate;

    // Convert to days
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    
    return `${diffDays} days ago`;
    

  }
  

  return (

    <div className="w-full bg-zinc-900 p-7 flex flex-wrap gap-8 ">
         {infoJob.map(
          (info,id) => {
          return <div key={id} >
                <Card logo={info.logo} jobTitle={info.jobTitle} companyName={info.companyName} experienceLevel={info.experienceLevel} jobType={info.jobType} salary={info.salary} location = {info.jobLocation} days = {dateCalculate(info.datePosted)}/>
          </div> 
        }
        )}
  
       
    </div>
  );
}

export default App;
