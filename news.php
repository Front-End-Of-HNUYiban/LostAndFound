<?php
	if($con=new mysqli("localhost","root","lzm8974106","lostandfound")){
		$con->query("set names utf8");
		if($signal=$_POST["signal"]){
			if($res=$con->query("select pid,title,name,time,kharacter,picture from lost")){
				$result="";
				while($r=$res->fetch_assoc()){
					$result.=$r["pid"].",".$r["title"].",".$r["name"].",".$r["time"].",".$r["kharacter"].",".$r["picture"].",lost;";
				}
				echo $result;
			}
			else{
				echo "error";
			}
		}
	}