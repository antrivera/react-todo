# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

todo1 = Todo.create(title: 'Clean room', body: 'Take out trash, make bed, etc.')
todo2 = Todo.create(title: 'Get a pet', body: 'Dog or cat', done: true)
todo3 = Todo.create(title: 'Get a job', body: 'need money')
