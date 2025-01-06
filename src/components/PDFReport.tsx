import { Document, Page, Text, View, StyleSheet, PDFViewer } from '@react-pdf/renderer';
import { Hotspot } from '@/lib/types';

interface PDFReportProps {
  hotspot: Hotspot;
}

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    padding: 30,
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
    color: '#1a365d',
    textAlign: 'center',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  subSection: {
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
    color: '#2c5282',
  },
  subtitle: {
    fontSize: 14,
    marginBottom: 5,
    color: '#4a5568',
  },
  text: {
    fontSize: 12,
    marginBottom: 5,
    color: '#4a5568',
  },
  metricsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20,
  },
  metricBox: {
    width: '45%',
    margin: '2.5%',
    padding: 10,
    backgroundColor: '#f7fafc',
    borderRadius: 5,
  },
  projectSection: {
    marginBottom: 15,
    padding: 10,
    backgroundColor: '#f7fafc',
    borderRadius: 5,
  },
});

export const PDFReport = ({ hotspot }: PDFReportProps) => {
  const formatCurrency = (amount: number) => {
    return `$${(amount / 1000000).toFixed(1)}M`;
  };

  return (
    <PDFViewer style={{ width: '100%', height: '600px' }}>
      <Document>
        <Page size="A4" style={styles.page}>
          <Text style={styles.header}>{hotspot.name} - Community Impact Report</Text>
          
          {/* Key Metrics Section */}
          <View style={styles.section}>
            <Text style={styles.title}>Key Metrics</Text>
            <View style={styles.metricsGrid}>
              <View style={styles.metricBox}>
                <Text style={styles.subtitle}>Community Sentiment</Text>
                <Text style={styles.text}>{hotspot.metrics.sentiment}%</Text>
              </View>
              <View style={styles.metricBox}>
                <Text style={styles.subtitle}>Articles Published</Text>
                <Text style={styles.text}>{hotspot.metrics.articles}</Text>
              </View>
              <View style={styles.metricBox}>
                <Text style={styles.subtitle}>Students Enrolled</Text>
                <Text style={styles.text}>{hotspot.metrics.studentsEnrolled.toLocaleString()}</Text>
              </View>
              <View style={styles.metricBox}>
                <Text style={styles.subtitle}>Investment to Date</Text>
                <Text style={styles.text}>{formatCurrency(hotspot.metrics.investmentToDate)}</Text>
              </View>
            </View>
          </View>

          {/* Social Metrics Section */}
          <View style={styles.section}>
            <Text style={styles.title}>Social Media Impact</Text>
            <View style={styles.subSection}>
              <Text style={styles.subtitle}>Twitter</Text>
              <Text style={styles.text}>Mentions: {hotspot.metrics.socialMetrics.twitter.mentions}</Text>
              <Text style={styles.text}>Sentiment: {hotspot.metrics.socialMetrics.twitter.sentiment}%</Text>
            </View>
            <View style={styles.subSection}>
              <Text style={styles.subtitle}>LinkedIn</Text>
              <Text style={styles.text}>Mentions: {hotspot.metrics.socialMetrics.linkedin.mentions}</Text>
              <Text style={styles.text}>Sentiment: {hotspot.metrics.socialMetrics.linkedin.sentiment}%</Text>
            </View>
            <View style={styles.subSection}>
              <Text style={styles.subtitle}>News Coverage</Text>
              <Text style={styles.text}>Mentions: {hotspot.metrics.socialMetrics.news.mentions}</Text>
              <Text style={styles.text}>Sentiment: {hotspot.metrics.socialMetrics.news.sentiment}%</Text>
            </View>
          </View>

          {/* Recommendations Section */}
          <View style={styles.section}>
            <Text style={styles.title}>Strategic Recommendations</Text>
            <View style={styles.subSection}>
              <Text style={styles.subtitle}>High Priority</Text>
              {hotspot.recommendations.highCost.map((rec, index) => (
                <Text key={index} style={styles.text}>• {rec}</Text>
              ))}
            </View>
            <View style={styles.subSection}>
              <Text style={styles.subtitle}>Medium Priority</Text>
              {hotspot.recommendations.mediumCost.map((rec, index) => (
                <Text key={index} style={styles.text}>• {rec}</Text>
              ))}
            </View>
            <View style={styles.subSection}>
              <Text style={styles.subtitle}>Low Priority</Text>
              {hotspot.recommendations.lowCost.map((rec, index) => (
                <Text key={index} style={styles.text}>• {rec}</Text>
              ))}
            </View>
          </View>

          {/* Future Investment Section */}
          <View style={styles.section}>
            <Text style={styles.title}>Future Investment Requirements</Text>
            <Text style={styles.text}>
              Required Investment: {formatCurrency(hotspot.metrics.futureRequirements)}
            </Text>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
};