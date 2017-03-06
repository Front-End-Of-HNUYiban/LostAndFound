<?php
	if($con=new mysqli("localhost","root","lzm8974106","lostandfound")){
		$con->query("set names utf8");
		if($title=$_POST["title"]){
			$type=$_POST["type"];
			$name=$_POST["name"];
			$time=$_POST["time"];
			$place=$_POST["place"];
			$thing=$_POST["things"]||"";
			$character=$_POST["character"]||"";
			$contact=$_POST["contact"]||"";
			$message=$_POST["message"]||"";
			$picture=$_POST["picture"]||"";
			$owner=$_POST["owner"];
			$insert="insert into ".$type." (title,name,time,place,things,kharacter,contact,message,picture,owner) values ('".
				$title."','".$name."','".$time."','".$place."','".$thing."','".$character."','".$contact."','".
				$message."','".$picture."','".$owner."')";
			if($con->query($insert)){
				$select="select pid from ".$type." where owner='".$owner."' order by pid desc limit 1";
				if($res=$con->query($select)){
					$number=$res->fetch_assoc();
					if($con->query("update user set ".$type."='".$number["pid"].",' where pid='".$owner."'")){
						echo "success";
					}
					else{
						echo "error";
					}
				}
				else{
					echo "error";
				}
			}
			else{
				echo "error";
			}
		}
	}