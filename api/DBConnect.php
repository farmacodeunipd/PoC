<?php
	class DBConnect {
		private const HOST_DB = "db";
		private const DATABASE_NAME = "mydatabase";
		private const USERNAME = "myuser";
		private const PASSWORD = "mypassword";
		private const PORT = "3306";

		private $connection;

		public function connect() {
			mysqli_report(MYSQLI_REPORT_ERROR);
			$this -> connection = mysqli_connect(
				self::HOST_DB,
				self::USERNAME,
				self::PASSWORD,
				self::DATABASE_NAME,
				self::PORT
			);
			if (!mysqli_connect_errno()) {
				return true;
			}
			else {
				return false;
			}
		}
        
		public function close() {
			if ($this -> connection != null) {
				mysqli_close($this -> connection);
			}
		}

		public function runQuery($query, $params) {
			$stmt = mysqli_prepare($this -> connection, $query);
			if ($stmt) {
				if (!empty($params)) {
					$types = str_repeat('s', count($params));
					mysqli_stmt_bind_param($stmt, $types, ...$params);
				}

				mysqli_stmt_execute($stmt);
				$result = mysqli_stmt_get_result($stmt);

				if ($result) {
					$resultArray = array();
					while ($row = mysqli_fetch_assoc($result)) {
						$resultArray[] = $row;
					}
					mysqli_free_result($result);
					mysqli_stmt_close($stmt);
					return $resultArray;
				}
				else {
					mysqli_stmt_close($stmt);
					return null;
				}
			}
			else {
				return null;
			}
		}
	}
?>