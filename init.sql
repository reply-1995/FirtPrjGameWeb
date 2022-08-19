create database reply;
use reply;

create table user(
	id varchar(20) not null primary key,
    password varchar(20) not null,
    name varchar(20) not null,
    profile varchar(10),
    email varchar(20) not null
);
insert into user values('test', '1234', 'test', '', 'test@naver.com');