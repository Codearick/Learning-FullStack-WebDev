"use server"
import fs from 'fs/promises'

export const submitAction = async (e)=>{
    console.log(e.get("name"), e.get("add"));
    await fs.appendFile("rohan.txt",`\n Name is: ${e.get("name")}, Address is: ${e.get("add")}`);
}
