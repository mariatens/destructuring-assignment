interface Scholar {
  firstName: string;
  lastName: string;
  cohortNumber: number;
}
// wo object destructuring
// function introduceScholar(scholar: Scholar): string {
//   return `${scholar.firstName} ${scholar.lastName} is an Academy Scholar, on Cohort ${scholar.cohortNumber}.`;
// }
// w object destructuring 
function introduceScholar(scholar: Scholar): string {
    const {firstName, lastName, cohortNumber} = scholar
    return `${firstName} ${lastName} is an Academy Scholar, on Cohort ${cohortNumber}.`
}

export default introduceScholar;
