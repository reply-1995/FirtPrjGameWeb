create database reply;
use reply;

create table user(
	id varchar(20) not null primary key,
    password varchar(20) not null,
    name varchar(20) not null,
    profile varchar(10) not null default "img0",
    email varchar(20) not null,
    score int not null default "0"
);

insert into user (id, password, name, email) values('test', '1234', 'test', 'test@naver.com');


drop table user;

desc user;
SELECT * FROM user;



create table communityFree(
	idx int not null primary key auto_increment,
    id varchar(20) not null,
    title  varchar(100) not null,
    content mediumtext not null,
    clicked int null default 0,
    isdeleted varchar(1) null default 'N',
    create_date date not null
);



create table comment(
	idx int not null primary key auto_increment,
    parentidx int null,
    category varchar(10) not null default 'free',
    id varchar(20) not null,
    content varchar(250) not null,
    isdeleted varchar(1) null default 'N',
    create_date date not null
);