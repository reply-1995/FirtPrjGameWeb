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


create table communityFree(
	idx int not null primary key auto_increment,
    id varchar(20) not null,
    title  varchar(100) not null,
    content varchar(4000) not null,
    clicked int null default 0,
    isdeleted varchar(1) null default 'N',
    create_date date not null
);
