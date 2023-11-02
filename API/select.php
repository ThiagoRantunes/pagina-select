<?php

include "config.php";
include "cors.php";


$result = $conexao->query("SELECT * FROM conteudo");

$data = array();

while ($row = $result->fetch_assoc()) {
    $data[] = $row;
}

echo json_encode($data);