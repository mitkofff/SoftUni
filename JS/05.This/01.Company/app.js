class Company{
    constructor(){
        this.departments = [];
    }

    addEmployee(username, salary, position, department){
        if(!username || !salary || !position || !department){
            return "Invalid input!";
        }
        if(salary < 0){
            return "Invalid input!";
        }
        let existingDepartment = this.departments.find(d => d.name === department);
        if(!existingDepartment){
            existingDepartment = {
                name: department,
                employees: [],
                averageSalary: function(){
                    return this.employees.reduce((prev, current) => prev + current.salary,0)/this.employees.length;
                }
            }
            this.departments.push(existingDepartment);
        }
        existingDepartment.employees.push({username, salary, position});
        return `New employee is hired. Name: ${username}. Position: ${position}`;
    }

    bestDepartment(){
        let [bestDepart] = [... this.departments].sort((b, a)=> { return a.averageSalary() - b.averageSalary()});
        let output = `Best Department is ${bestDepart.name}:\n`;
        output += `Average salary: ${bestDepart.averageSalary().toFixed(2)}\n`;
        output += [...bestDepart.employees]
            .sort((a, b) => b.salary - a.salary ||
            a.username.localeCompare(b.username))
            .map(e => `${e.username} ${e.salary}  ${e.position}`).join('\n');
        return output;
    }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
