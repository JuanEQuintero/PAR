-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 16-07-2024 a las 15:16:23
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `patitasalrescate`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `administrador`
--

CREATE TABLE `administrador` (
  `codigo_administrador` int(11) NOT NULL,
  `nombre_administrador` varchar(15) DEFAULT NULL,
  `apellido_administrador` varchar(30) DEFAULT NULL,
  `correo_administrador` varchar(40) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `colaborador`
--

CREATE TABLE `colaborador` (
  `codigo_colaboador` int(11) NOT NULL,
  `nombre_colaborador` varchar(15) DEFAULT NULL,
  `apellido_colaborador` varchar(30) DEFAULT NULL,
  `correo_colaborador` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `informacion`
--

CREATE TABLE `informacion` (
  `codigo_informacion` int(11) NOT NULL,
  `fecha_informacion` date DEFAULT NULL,
  `texto_informacion` varchar(250) DEFAULT NULL,
  `codigo_colaborador` int(11) DEFAULT NULL,
  `codigo_administrador` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `preguntas`
--

CREATE TABLE `preguntas` (
  `codigo_pregunta` int(11) NOT NULL,
  `codigo_colaborador` int(11) DEFAULT NULL,
  `codigo_usuario` int(11) DEFAULT NULL,
  `respuesta_pregunta` varchar(250) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `codigo_usuario` int(11) NOT NULL,
  `nombre_usuario` varchar(15) DEFAULT NULL,
  `apellido_usuario` varchar(30) DEFAULT NULL,
  `correo_usuario` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `administrador`
--
ALTER TABLE `administrador`
  ADD PRIMARY KEY (`codigo_administrador`);

--
-- Indices de la tabla `colaborador`
--
ALTER TABLE `colaborador`
  ADD PRIMARY KEY (`codigo_colaboador`);

--
-- Indices de la tabla `informacion`
--
ALTER TABLE `informacion`
  ADD PRIMARY KEY (`codigo_informacion`),
  ADD KEY `codigo_colaborador` (`codigo_colaborador`),
  ADD KEY `codigo_administrador` (`codigo_administrador`);

--
-- Indices de la tabla `preguntas`
--
ALTER TABLE `preguntas`
  ADD PRIMARY KEY (`codigo_pregunta`),
  ADD KEY `codigo_usuario` (`codigo_usuario`),
  ADD KEY `codigo_colaborador` (`codigo_colaborador`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`codigo_usuario`);

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `informacion`
--
ALTER TABLE `informacion`
  ADD CONSTRAINT `informacion_ibfk_1` FOREIGN KEY (`codigo_colaborador`) REFERENCES `colaborador` (`codigo_colaboador`),
  ADD CONSTRAINT `informacion_ibfk_2` FOREIGN KEY (`codigo_administrador`) REFERENCES `administrador` (`codigo_administrador`);

--
-- Filtros para la tabla `preguntas`
--
ALTER TABLE `preguntas`
  ADD CONSTRAINT `preguntas_ibfk_1` FOREIGN KEY (`codigo_colaborador`) REFERENCES `colaborador` (`codigo_colaboador`),
  ADD CONSTRAINT `preguntas_ibfk_2` FOREIGN KEY (`codigo_usuario`) REFERENCES `usuario` (`codigo_usuario`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
