import React, { useState } from 'react';
import { PDFDownloadLink, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const ResumeBuilder = () => {
  const [sections, setSections] = useState([
    { id: 1, title: 'Contact Information', fields: [{ id: 1, label: 'Full Name', value: '' }, { id: 2, label: 'Email', value: '' }, { id: 3, label: 'Phone', value: '' }] },
    { id: 2, title: 'Summary', fields: [{ id: 1, label: 'Summary', value: '' }] },
  ]);

  const handleFieldChange = (sectionId, fieldId, value) => {
    const updatedSections = sections.map(section =>
      section.id === sectionId
        ? {
            ...section,
            fields: section.fields.map(field =>
              field.id === fieldId ? { ...field, value } : field
            ),
          }
        : section
    );
    setSections(updatedSections);
  };

  const addSection = () => {
    const newSectionId = sections.length + 1;
    setSections([...sections, { id: newSectionId, title: 'New Section', fields: [] }]);
  };

  const addField = (sectionId) => {
    const updatedSections = sections.map(section =>
      section.id === sectionId
        ? {
            ...section,
            fields: [
              ...section.fields,
              { id: section.fields.length + 1, label: 'New Field', value: '' },
            ],
          }
        : section
    );
    setSections(updatedSections);
  };

  const MyDocument = () => (
    <Document>
      <Page style={styles.page}>
        <View>
          <Text style={styles.sectionTitle}>Resume</Text>
          {sections.map(section => (
            <View key={section.id}>
              <Text style={styles.sectionTitle}>{section.title}</Text>
              {section.fields.map(field => (
                <Text key={field.id} style={styles.field}>
                  {field.label}: {field.value}
                </Text>
              ))}
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Resume Builder</h2>
      {sections.map(section => (
        <div key={section.id} style={styles.sectionContainer}>
          <h3 style={styles.sectionHeading}>{section.title}</h3>
          {section.fields.map(field => (
            <div key={field.id} style={styles.fieldContainer}>
              <label style={styles.label}>{field.label}</label>
              <input
                type="text"
                value={field.value}
                onChange={(e) => handleFieldChange(section.id, field.id, e.target.value)}
                style={styles.input}
              />
            </div>
          ))}
          <button onClick={() => addField(section.id)} style={styles.addButton}>Add Field</button>
        </div>
      ))}
      <button onClick={addSection} style={styles.addButton}>Add Section</button>
      <PDFDownloadLink document={<MyDocument />} fileName="resume.pdf" style={styles.downloadButton}>Download Resume (PDF)</PDFDownloadLink>
    </div>
  );
};


export default ResumeBuilder;

const styles = StyleSheet.create({
    container: {
      maxWidth: '800px',
      margin: '0 auto',
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
    },
    heading: {
      textAlign: 'center',
      marginBottom: '20px',
    },
    sectionContainer: {
      marginBottom: '30px',
    },
    sectionHeading: {
      fontSize: '18px',
      fontWeight: 'bold',
      marginBottom: '10px',
    },
    fieldContainer: {
      marginBottom: '10px',
    },
    label: {
      display: 'block',
      marginBottom: '5px',
    },
    input: {
      width: '100%',
      padding: '8px',
      fontSize: '16px',
      border: '1px solid #ccc',
      borderRadius: '4px',
    },
    addButton: {
      backgroundColor: '#007bff',
      color: '#fff',
      border: 'none',
      padding: '10px 20px',
      fontSize: '16px',
      borderRadius: '4px',
      cursor: 'pointer',
      marginBottom: '20px',
    },
    downloadButton: {
      backgroundColor: '#EF2640',
      color: '#fff',
      border: 'none',
      padding: '10px 20px',
      fontSize: '16px',
      borderRadius: '4px',
      cursor: 'pointer',
      textDecoration: 'none',
      display: 'block',
      textAlign: 'center',
    },
    page: {
      padding: 20,
    },
    content: {
      fontFamily: 'Arial, sans-serif',
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 20,
      textAlign: 'center',
    },
    section: {
      marginBottom: 20,
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    field: {
      fontSize: 16,
      marginBottom: 5,
    },
  });
  
