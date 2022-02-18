var human = {
    firstName: "Amil",
    lastName: "Nuriyev",
    password: "Talis.balasi",
   get fullName() {
        return this.firstName + " " + this.lastName;
    },
    upperFullName(){
        document.write(this.fullName.toUpperCase())
    
      }
}

human.upperFullName();