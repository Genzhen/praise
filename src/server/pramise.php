<?php
    class sqlCon{
        public $serverName;
        public $userName;
        public $passWord;
        public $dbName;
        public $con;
        public function __construct($serverName,$userName,$passWord,$dbName){

            $this->serverName = $serverName;
            $this->userName = $userName;
            $this->passWord = $passWord;
            $this->dbName = $dbName;
            
        }
        //mysqli方式连接数据库
        public function sqlConnection(){
            // var_dump($this->serverName);exit;
            //创建连接
            $this->con = new mysqli($this->serverName,  $this->userName,  $this->passWord,  $this->dbName);
            if ( $this->con->connect_error) {
                die("连接失败: " .  $this->con->connect_error);
            } 
        }
        //数据更新
        public function updateData($sql){
            $this->sqlConnection();
           $res = mysqli_query($this->con,$sql);
            if ($res ) {
                echo $res;
            } else {
                echo "Error: " . $sql . "<br>" . mysqli_error($conn);
            }
            mysqli_close( $this->con);
        }
    }
    class myCon extends sqlCon{
        public function __construct($serverName,$userName,$passWord,$dbName){
            parent::__construct($serverName,$userName,$passWord,$dbName);
        }
        
        public function updateCount(){
            $sql = "UPDATE count SET num=num+1 WHERE id='1'";
            $this->updateData($sql);
        }
    }
    $pramise = new myCon("localhost",'root','','test');
    $pramise->updateCount();
?>