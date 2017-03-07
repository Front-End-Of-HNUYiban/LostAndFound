<?php
	if($con=new mysqli("localhost","root","lzm8974106","lostandfound")){
		$con->query("set names utf8");
		if($type=$_POST["type"]){
			if($res=$con->query("select title,name,time,kharacter,picture from ".$type)){
				$index=1;
				$result="";
				while($r=$res->fetch_assoc()){
					if($index>=$_POST["index"]&&$index<$_POST["index"]+$_POST["amount"]){
						$result.=$r["title"].",".$r["name"].",".$r["time"].",".$r["kharacter"].",".$r["picture"].";";
					}
					$index++;
				}
				echo $result;
			}
			else{
				echo "error";
			}
		}
	}