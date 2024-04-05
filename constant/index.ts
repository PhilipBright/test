export type Student = {
    id: string
    username: string
    enrollmentId: string
    registerDate: String
    role: string
    subscription: string
    email: string
  }
  export type Instructor = {
    id: string
    profile: string
    username: string
    registerDate: String
    role: string
    email: string
  }
  export type Courses = {
    id: string
    title: string
    category: string
    description: string
    date: String
    type: string
    duration: string
    level: string
  }