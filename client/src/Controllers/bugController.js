import bugModel from '../Models/bugModel'

export const retrieveBugs = () => {
  let data = []
  data.push(new bugModel({
    _id: 123,
    name: "Crash on Load",
    details: "Crashes after 3 seconds ",
    steps: "Open application and it will crash",
    version: "v2.0",
    assigned: "Joe",
    creator: "Ryan",
    priority: 1,
    time: "23:38"
  }))
  data.push(new bugModel({
    _id: 123,
    name: "Wont Load",
    details: "Crashes after 3 seconds ",
    steps: "Open application and it will crash",
    version: "v2.0",
    assigned: "Joe",
    creator: "Ryan",
    priority: 3,
    time: "21:38"
  }))

  let sorted = data.sort((a, b) => {return a.priority - b.priority})

  return sorted
}