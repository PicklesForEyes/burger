create database burgers_db;

use burgers_db;

create table burgers(
  id int not null auto_increment,
  burger_name varchar(30),
  devoured boolean,
  date datetime default current_timestamp on update current_timestamp,
  primary key (id)
);

insert into burgers(burger_name, devoured)
  values
    ('Mission A-Corn-Plished', false),
    ('Last of the Mo-Jicama', false),
    ('Olive and Let Die', false)