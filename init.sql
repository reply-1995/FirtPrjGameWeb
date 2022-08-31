create database reply;
use reply;

create table user(
	id varchar(20) not null primary key,
    password varchar(20) not null,
    name varchar(20) not null,
    profile varchar(10) not null default "img0",
    email varchar(100) not null,
    score int not null default "0"
);

insert into user (id, password, name, email) values('test', '1234', 'test', 'test@naver.com');


drop table user;

desc user;
SELECT * FROM user;



create table community(
	idx int not null primary key auto_increment,
    id varchar(20) not null,
    category varchar(10) not null default 'free',
    title  varchar(100) not null,
    content mediumtext not null,
    clicked int null default 0,
    isdeleted varchar(1) null default 'N',
    create_date date not null,
    RPimgsrc varchar(100) null
);

drop table community;

insert into community(id,title,content,create_date) values('test11', 'asdf1', 't12esttesttest', '2022-08-19');

select * from community;



create table comment(
	idx int not null primary key auto_increment,
    parentidx int null,
    category varchar(10) not null default 'free',
    id varchar(20) not null,
    content varchar(250) not null,
    isdeleted varchar(1) null default 'N',
    create_date datetime not null
);

select * from comment;


create table reqSaveImg(
	idx int not null primary key auto_increment,
    category varchar(10) not null default 'screenshot',
    id varchar(20) not null,
	create_date datetime not null,
    filename varchar(50) null
);
select * from reqSaveImg;
drop table reqSaveImg;