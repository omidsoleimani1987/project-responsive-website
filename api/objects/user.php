<?php

class User {
    private $conn;

    public function __construct($db) {
        $this->conn = $db;
    }

    // read from tables based on given table name
    public function read() {
        $query = "SELECT username, password FROM user";
        $stmt = $this->conn->prepare($query);
        $stmt->execute();

        return $stmt;
    }

    // ...
    public function register() {
        $query = "SELECT username, password FROM user";
        $stmt = $this->conn->prepare($query);
        $stmt->execute();

        return $stmt;
    }
}