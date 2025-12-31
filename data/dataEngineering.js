export const dataEngineeringProjects = [
  {
    id: 1,
    name: "Kafka Streaming ETL",
    description:
    "kafka-streaming-etl-aws is an end-to-end real-time stock market data engineering pipeline that uses Apache Kafka for streaming ingestion, dedicated producer/consumer services for event flow, and AWS services (S3, EC2, Glue Crawler/Catalog, and Athena) to store, catalog, and query the data",
    demoLink: "https://github.com/mohdasjal1/kafka-streaming-etl-aws",
    image: "/projects-images/data-engineering-images/kafka.jpg",
  },
  {
    id: 2,
    name: "Event-Driven Data Pipeline with AWS",
    description:
    "It is a serverless, event-driven pipeline where new objects uploaded to an Amazon S3 bucket automatically trigger an AWS Lambda function, and execution is monitored through Amazon CloudWatch Logs",
    demoLink: "https://github.com/mohdasjal1/lambda-s3-automation",
    image: "/projects-images/data-engineering-images/event.png",
  },
  {
    id: 3,
    name: "AWS Data Pipeline",
    description:
    "End-to-end AWS data pipeline that ingests raw data from Amazon S3, catalogs it using AWS Glue Crawler, queries with Amazon Athena, transforms through AWS Glue ETL, and loads the processed data into Amazon Redshift for analytics and reporting.",
    demoLink:
    "https://github.com/mohdasjal1/LakeToWarehouse-aws-s3-glue-redshift",
    image: "/projects-images/data-engineering-images/aws.jpeg",
  },
  {
    id: 4,
    name: "AWS-Snowflake SCD2 Pipeline",
    description:
    "AWS–Snowflake SCD2 Pipeline is an end-to-end AWS + Snowflake pipeline that automates ingestion and implements SCD Type 2 to preserve full historical changes in a dimension table. It uses Dockerized Jupyter (data generation) and NiFi (ingestion) on EC2, with Snowpipe + Streams + Tasks in Snowflake to load and merge changes.",
    demoLink: "https://github.com/mohdasjal1/end-to-end-scd2-data-pipeline",
    image: "/projects-images/data-engineering-images/scd2.png",
  },
  {
    id: 5,
      name: "S&P 500 Stock ETL",
      description:
      "sp500-stock-etl is an end-to-end data engineering pipeline that automates ETL for S&P 500 company metadata and stock prices using Apache Airflow orchestration, Amazon S3 for raw storage, and Snowflake for analytics. It pulls the latest S&P 500 constituents from Wikipedia and fetches recent stock prices via the Yahoo Finance API, keeping the dataset refreshed and centralized for analysis.",
      demoLink: "https://github.com/mohdasjal1/sp500-stock-etl",
      image: "/projects-images/data-engineering-images/sp500.png",
    },
    {
      id: 6,
      name: "Weather Data Pipeline",
      description:
      "Weather-data-pipeline is an end-to-end weather ETL pipeline that pulls real-time data from the OpenWeather API, orchestrates processing with Apache Airflow, stores structured records in PostgreSQL, and backs up processed outputs to AWS S3 for downstream analysis.",
      demoLink: "https://github.com/mohdasjal1/weather-data-pipeline",
      image: "/projects-images/data-engineering-images/weather_pipeline.png",
    },
    {
      id: 7,
      name: "Snowflake Weather Warehousing",
      description:
      "Snowflake-weather-warehousing is an end-to-end Snowflake warehousing project that combines Yelp business/review data with climate/weather data to produce an analytics-ready model for insights. It follows a structured ETL flow from staging raw files → raw tables → an ODS layer → a star-schema data warehouse for reporting and analysis.",
      demoLink: "https://github.com/mohdasjal1/snowflake-weather-warehousing",
      image: "/projects-images/data-engineering-images/snowflake_weather.png",
    },
    {
      id: 8,
      name: "Sparkify Data Warehouse",
      description:
      "Sparkify-data-warehouse is a cloud data warehousing project that ingests semi-structured JSON from AWS S3 into Snowflake, then cleans and transforms it into an analytics-ready star schema. It follows a Bronze → Silver → Gold layered architecture to keep raw, refined, and curated analytics data clearly separated",
      demoLink: "https://github.com/mohdasjal1/sparkify-data-warehouse",
      image: "/projects-images/data-engineering-images/sparkify.png",
  },
  {
    id: 9,
    name: "Snowflake Data Ingestion",
    description:
    "Snowflake-data-ingestion is an end‑to‑end Snowflake ingestion project that demonstrates both batch loads and near‑real‑time loading from AWS S3 using Snowpipe auto‑ingest. It also uses Snowflake Time Travel to support data recovery and auditing after changes or accidental deletes.​",
    demoLink: "https://github.com/mohdasjal1/snowflake-data-ingestion",
    image: "/projects-images/data-engineering-images/data_ingestion_diagram.png",
  }];  
  
  