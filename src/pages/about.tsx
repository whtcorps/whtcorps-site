import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { RouteComponentProps } from "@reach/router";
import { Layout } from "../components/layout";
import { SEO } from "../components/seo";

/***************************************************************
  Below are some examples of using styled-components with the
  theme and framer-motion.
/***************************************************************

/*
  1. A basic styled component using the theme.
*/
const StyledComponent1 = styled.p`
  color: ${props => props.theme.colors.orange};
  font-size: 1.2rem;
`;

/*
  2. A styled component that changes color based on the screen size
  using the theme.
*/
const StyledComponent2 = styled.p`
  color: ${({ theme }) =>
    theme.screens.sm ? theme.colors.blue : theme.colors.orange};
  font-size: 1.2rem;
`;

/*
  3. A styled component that extends a framer-motion component.
  (animation props applied in the component instance)
*/

const OrangeBlock = styled(motion.div)`
  background: ${props => props.theme.colors.orange};
  height: 100px;
  width: 100px;
  border-radius: 10px;
  margin: 10px;
`;

/*
  4. A styled component that extends a framer-motion component.
  (animation props applied in the styled-component definition
  via the attrs method)
*/
const BlueBlock = styled(motion.div).attrs(() => ({
  initial: { opacity: 0, scale: 0 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 2 },
  whileHover: { scale: 0.8 },
}))`
  background: ${props => props.theme.colors.blue};
  height: 100px;
  width: 100px;
  border-radius: 10px;
  margin: 10px;
`;

const BlocksWrapper = styled.section`
  display: flex;
  align-items: center;
`;

const AboutPage: React.FC<RouteComponentProps> = ({ location = {} }) => {
  const path = location.pathname;
  return (
    <Layout>
      <SEO
        title="About gatsby-starter-template-deluxe"
        description="Examples using the gatsby-starter-template-deluxe."
      />
      <h3>
        EinsteinDB is an Open-world Embedded Knowledge Graph <code>{path}</code> with key-value and schema replicant journaling!
      </h3>

      <StyledComponent1>EinsteinDB is built with Rust</StyledComponent1>
      <StyledComponent2>
        Inspired by early work at IBM pertaining to Time Shares in Lamport's part-time parliament; Automatic Failover, and Early concurrent versioning systems.
        EinsteinDB offers the world of SQL a distributed, ACID compliant; Relativistic Linearizable, Causal Consistent Knowledge Graph. Use EinsteinDB to prune a High Throughput system
        and virtualize a polymorphic, platform-agnostic, resource caching instrument. EinsteinDB leverages inevitable cluster partitions and traffic uptick with an improved parallelizable algorithm which corroborates asynchronously
        the truthiness of values; offering a single-writer, multiple reader interface wherein clients are able to access isolated transactions and the embedded key-value stores inside the architecture.
        In append-log fashion, keep tracks of indexed metadata tokenized filamnents of data structures that are robus 64bit time-travel friendly versioned stores inside what we call at EinsteinDB: The Cone.
        Resources barter for future threading capacity based on the load at the moment of request; EinsteinDB interprets the deduplication and efficiently renders the most accurate value, which is composed of a future(lightlike) and past(timelike) timeline expression
        of lambda parsing threads.

      </StyledComponent2>

      <BlocksWrapper>
        <OrangeBlock
          animate={{ rotate: 360 }}
          transition={{ duration: 2 }}
          whileHover={{ rotate: 1.1 }}
        />
        <BlueBlock />
      </BlocksWrapper>
    </Layout>
  );
};

export default AboutPage;
