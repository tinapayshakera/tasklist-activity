export interface Student {
id: number,
firstName: string,
lastName: string,
age: number,
gender: "Male"|"Female",
nationality: string,
homeaddress: string,
status: "Single"|"Married",
title: string,
elementaryschool: string,
highschool: string,
college?: string,
degree?: string
}
