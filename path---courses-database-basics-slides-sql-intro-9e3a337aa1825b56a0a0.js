webpackJsonp([0xa2c1e973cc46],{412:function(n,e){n.exports={data:{allMarkdownRemark:{edges:[{node:{html:"<p>class: middle center</p>\n<h2>Relational Database Systems</h2>\n<p>.left[</p>\n<ul>\n<li>Structured Query Language</li>\n<li>concept called a ‘transaction’\n]</li>\n</ul>\n<hr>\n<p>class: middle center</p>\n<h2>Offerings</h2>\n<p>.left[</p>\n<ul>\n<li>MySQL</li>\n<li>Postgresql</li>\n<li>SQLite</li>\n<li>Oracle</li>\n<li>Microsoft SQL Server</li>\n<li>IBM DB2</li>\n<li>Sybase ASE\n]</li>\n</ul>\n<hr>\n<p>class: middle center</p>\n<h2>DDL Data Definition Language</h2>\n<p>.left[</p>\n<ul>\n<li><em>Create:</em> For the creation of tables and other objects in your database. There are over 50 different objects you can create within a database.</li>\n<li><em>Alter:</em> Many of the objects you create can be altered after creation, but not all. The benefit here is that altering an object is an alternative to dropping and re-creating an object. This can come in handy when an object may contain thousands or millions of rows of data.</li>\n<li><em>Drop:</em> The opposite of create, and analogous to a delete. If you drop an object, you not only delete the object definition but also any data stored inside of it.\n]</li>\n</ul>\n<hr>\n<p>class: middle center</p>\n<h2>DML Data Manipulation Language</h2>\n<p>.left[</p>\n<ul>\n<li><em>Insert:</em> For adding data to a table.</li>\n<li><em>Select:</em> For retrieving data from a table.</li>\n<li><em>Delete:</em> For removing data from a table.</li>\n<li><em>Update:</em> Alters data in a row of a table, ‘updating’ existing values to the new values you provide.\n]</li>\n</ul>\n<hr>\n<p>class: middle center</p>\n<h2>Relationships</h2>\n<p>.left[\nIn a Relational Database, all of the tables will somehow be connected. We will learn more about the connection of tables, but its important to understand what type of relationships exist.</p>\n<ul>\n<li>One-to-one</li>\n<li>One-to-Many</li>\n<li>Many-to-Many\n]</li>\n</ul>\n<hr>\n<p>class: middle center</p>\n<h2>One-to-One</h2>\n<p>A One-to-One relationship exists when one row in a table is linked to only one row in another table. For example, in a customer database, each customer has only one customer ID and that ID is only assigned to one person.</p>\n<hr>\n<h2>One-to-Many</h2>\n<p>A One-to-Many relationship exists when one row in a table is linked to many rows in another table. An example could be that one Support Agent is assigned to many customers and only that specific support agent will be linked to many customers.</p>\n<hr>\n<p>class: middle center</p>\n<h2>Many-to-Many</h2>\n<p>A Many-to-Many relationship exists when many rows in a table are linked to many rows in another table. For example, there are many products in a store and many customers can buy those products.</p>\n<hr>\n<p>class: middle center</p>\n<h2>Select</h2>\n<p>.left[</p>\n<ul>\n<li>SELECT [column names] FROM table_name</li>\n<li>\n<p>WHERE for filtering</p>\n<ul>\n<li>SELECT [column names] FROM table_name WHERE [row restrictions]</li>\n</ul>\n</li>\n<li>\n<p>Fuzzy matching</p>\n<ul>\n<li>SELECT Name FROM tracks WHERE Name LIKE ‘the%’</li>\n</ul>\n</li>\n<li>\n<p>Ordering</p>\n<ul>\n<li>SELECT Name FROM tracks ORDER BY Name DESC</li>\n</ul>\n</li>\n<li>\n<p>GroupBy</p>\n<ul>\n<li>SELECT ArtistId, count(ArtistId) FROM albums GROUP BY ArtistId\n//temp column ArtistId</li>\n</ul>\n</li>\n</ul>\n<!--SELECT user_id, count(user_id) FROM books GROUP BY user_id-->\n<h2>]</h2>\n<p>class: middle center</p>\n<h2>Insert / Create</h2>\n<p>.left[</p>\n<ul>\n<li>INSERT INTO [table name] (column list) VALUES (value list)</li>\n<li>CREATE TABLE customersToCall (Name VARCHAR(60), Phone VARCHAR(24))</li>\n<li>SELECT (FirstName || ’ ’ || LastName) as Name, Phone from customers where Country = ‘Brazil’\n]</li>\n</ul>\n<hr>\n<p>class: middle center</p>\n<h2>MAKING TABLES</h2>\n<h2>make sure it has an ID</h2>\n<p>users:</p>\n<ul>\n<li>first name</li>\n<li>last name</li>\n<li>address</li>\n<li>phone number</li>\n</ul>\n<p>books:</p>\n<ul>\n<li>title</li>\n<li>author</li>\n<li>genre</li>\n<li>usersId</li>\n<li>publishDate</li>\n</ul>",internal:{content:"---\ntitle: \"Database Basics\" \ncourseId:  \"FSWG103\"\ncirriculum: \n  - \"Software Development\"\ntype: \"slide\"\ndraft: false\n---\n\nclass: middle center\n\n## Relational Database Systems\n\n.left[\n\n* Structured Query Language\n* concept called a 'transaction'\n  ]\n\n---\n\nclass: middle center\n\n## Offerings\n\n.left[\n\n* MySQL\n* Postgresql\n* SQLite\n* Oracle\n* Microsoft SQL Server\n* IBM DB2\n* Sybase ASE\n  ]\n\n---\n\nclass: middle center\n\n## DDL Data Definition Language\n\n.left[\n\n* _Create:_ For the creation of tables and other objects in your database. There are over 50 different objects you can create within a database.\n* _Alter:_ Many of the objects you create can be altered after creation, but not all. The benefit here is that altering an object is an alternative to dropping and re-creating an object. This can come in handy when an object may contain thousands or millions of rows of data.\n* _Drop:_ The opposite of create, and analogous to a delete. If you drop an object, you not only delete the object definition but also any data stored inside of it.\n  ]\n\n---\n\nclass: middle center\n\n## DML Data Manipulation Language\n\n.left[\n\n* _Insert:_ For adding data to a table.\n* _Select:_ For retrieving data from a table.\n* _Delete:_ For removing data from a table.\n* _Update:_ Alters data in a row of a table, 'updating' existing values to the new values you provide.\n  ]\n\n---\n\nclass: middle center\n\n## Relationships\n\n.left[\nIn a Relational Database, all of the tables will somehow be connected. We will learn more about the connection of tables, but its important to understand what type of relationships exist.\n\n* One-to-one\n* One-to-Many\n* Many-to-Many\n  ]\n\n---\n\nclass: middle center\n\n## One-to-One\n\nA One-to-One relationship exists when one row in a table is linked to only one row in another table. For example, in a customer database, each customer has only one customer ID and that ID is only assigned to one person.\n\n---\n\n## One-to-Many\n\nA One-to-Many relationship exists when one row in a table is linked to many rows in another table. An example could be that one Support Agent is assigned to many customers and only that specific support agent will be linked to many customers.\n\n---\n\nclass: middle center\n\n## Many-to-Many\n\nA Many-to-Many relationship exists when many rows in a table are linked to many rows in another table. For example, there are many products in a store and many customers can buy those products.\n\n---\n\nclass: middle center\n\n## Select\n\n.left[\n\n* SELECT [column names] FROM table_name\n* WHERE for filtering\n  * SELECT [column names] FROM table_name WHERE [row restrictions]\n* Fuzzy matching\n  * SELECT Name FROM tracks WHERE Name LIKE 'the%'\n* Ordering\n  * SELECT Name FROM tracks ORDER BY Name DESC\n* GroupBy\n  * SELECT ArtistId, count(ArtistId) FROM albums GROUP BY ArtistId\n    //temp column ArtistId\n\n<!--SELECT user_id, count(user_id) FROM books GROUP BY user_id-->\n\n## ]\n\nclass: middle center\n\n## Insert / Create\n\n.left[\n\n* INSERT INTO [table name] (column list) VALUES (value list)\n* CREATE TABLE customersToCall (Name VARCHAR(60), Phone VARCHAR(24))\n* SELECT (FirstName || ' ' || LastName) as Name, Phone from customers where Country = 'Brazil'\n  ]\n\n---\n\nclass: middle center\n\n## MAKING TABLES\n\n## make sure it has an ID\n\nusers:\n\n* first name\n* last name\n* address\n* phone number\n\nbooks:\n\n* title\n* author\n* genre\n* usersId\n* publishDate\n"},fields:{slug:"/courses/database basics/slides/sql-intro/"}}}]}},pathContext:{slug:"/courses/database basics/slides/sql-intro/"}}}});
//# sourceMappingURL=path---courses-database-basics-slides-sql-intro-9e3a337aa1825b56a0a0.js.map