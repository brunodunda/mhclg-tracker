
import React, { useState, useEffect } from 'react';
const initialDocuments = [ 
 { id: 1, title: 'Delivering a Decade of Renewal for Social Housing', type: 'Policy Paper', topic: 'Social Housing', status: 'Updated', publishDate: '2025-07-02', closeDate: '', responseDate: '', updateDate: '2026-01-28', relatedIds: '2,3,4,5,23', notes: '5-step plan for social housing sector', url: 'https://www.gov.uk/government/publications/delivering-a-decade-of-renewal-for-social-housing' }, 
 { id: 2, title: 'Reformed Decent Homes Standard', type: 'Consultation', topic: 'Social Housing', status: 'Response Published', publishDate: '2025-07-02', closeDate: '2025-09-12', responseDate: '2026-01-28', updateDate: '', relatedIds: '1,4,24,25', notes: 'New DHS for social and private rented', url: '' }, 
 { id: 3, title: 'Social Rent Convergence', type: 'Consultation', topic: 'Social Housing', status: 'Response Published', publishDate: '2025-07-02', closeDate: '2025-08-27', responseDate: '2026-01-28', updateDate: '', relatedIds: '1,28', notes: '£1-2/week above CPI+1% until convergence', url: '' }, 
 { id: 4, title: 'Energy Efficiency of Socially Rented Homes', type: 'Consultation', topic: 'Social Housing', status: 'Response Published', publishDate: '2025-07-02', closeDate: '2025-09-12', responseDate: '2026-01-28', updateDate: '', relatedIds: '1,2', notes: 'SRS MEES consultation', url: '' }, 
 { id: 5, title: 'Leaseholder Protections (Charges & Services)', type: 'Consultation', topic: 'Leasehold', status: 'Awaiting Response', publishDate: '2025-07-04', closeDate: '2025-09-26', responseDate: '', updateDate: '', relatedIds: '20,21,22', notes: 'Service charge transparency; Section 20 reform', url: '' }, 
 { id: 6, title: 'Competence and Conduct Standard', type: 'Consultation', topic: 'Social Housing', status: 'Response Published', publishDate: '2024-02-06', closeDate: '2024-04-05', responseDate: '2025-09-30', updateDate: '', relatedIds: '7', notes: 'Qualification requirements for social housing staff', url: '' }, 
 { id: 7, title: 'Social Tenant Access to Information', type: 'Consultation', topic: 'Social Housing', status: 'Response Published', publishDate: '2024-06-01', closeDate: '2024-09-01', responseDate: '2025-09-30', updateDate: '', relatedIds: '6', notes: '', url: '' }, 
 { id: 8, title: 'Pride in Place Strategy', type: 'Strategy', topic: 'Communities', status: 'Published', publishDate: '2025-09-25', closeDate: '', responseDate: '', updateDate: '', relatedIds: '', notes: '', url: '' }, 
 { id: 9, title: 'Home Buying and Selling Reform', type: 'Consultation', topic: 'Home Buying', status: 'Awaiting Response', publishDate: '2025-10-06', closeDate: '2025-12-29', responseDate: '', updateDate: '', relatedIds: '10', notes: '', url: '' }, 
 { id: 10, title: 'Material Information in Property Listings', type: 'Consultation', topic: 'Home Buying', status: 'Awaiting Response', publishDate: '2025-10-20', closeDate: '2026-01-15', responseDate: '', updateDate: '', relatedIds: '9', notes: '', url: '' }, 
 { id: 11, title: 'SAHP 2026-2036 Launch', type: 'Policy Paper', topic: 'Social Housing', status: 'Published', publishDate: '2025-11-07', closeDate: '', responseDate: '', updateDate: '', relatedIds: '1', notes: '£39bn programme; bidding opens Feb 2026', url: '' }, 
 { id: 12, title: 'Renters Rights Act: Implementation Roadmap', type: 'Guidance', topic: 'Private Rented', status: 'Published', publishDate: '2025-11-13', closeDate: '', responseDate: '', updateDate: '', relatedIds: '', notes: 'Section 21 ends 1 May 2026', url: '' }, 
 { id: 13, title: 'Housing Disrepair Claims', type: 'Call for Evidence', topic: 'Private Rented', status: 'Open', publishDate: '2025-12-04', closeDate: '2026-02-28', responseDate: '', updateDate: '', relatedIds: '', notes: '', url: '' }, 
 { id: 14, title: 'A National Plan to End Homelessness', type: 'Strategy', topic: 'Homelessness', status: 'Published', publishDate: '2025-12-11', closeDate: '', responseDate: '', updateDate: '', relatedIds: '', notes: '', url: '' }, 
 { id: 15, title: 'NPPF Reforms', type: 'Consultation', topic: 'Planning', status: 'Open', publishDate: '2025-12-16', closeDate: '2026-03-10', responseDate: '', updateDate: '', relatedIds: '16', notes: 'Major planning policy overhaul', url: '' }, 
 { id: 16, title: 'Design and Placemaking PPG', type: 'Consultation', topic: 'Planning', status: 'Open', publishDate: '2026-01-21', closeDate: '2026-03-10', responseDate: '', updateDate: '', relatedIds: '15', notes: '', url: '' }, 
 { id: 20, title: 'Enhanced Protections for Freehold Estates', type: 'Consultation', topic: 'Leasehold', status: 'Open', publishDate: '2025-12-18', closeDate: '2026-03-12', responseDate: '', updateDate: '', relatedIds: '5,21,22', notes: '', url: '' }, 
 { id: 21, title: 'Reducing Private Estate Management', type: 'Consultation', topic: 'Leasehold', status: 'Open', publishDate: '2025-12-18', closeDate: '2026-03-12', responseDate: '', updateDate: '', relatedIds: '5,20,22', notes: '', url: '' }, 
 { id: 22, title: 'Draft Commonhold and Leasehold Reform Bill', type: 'Draft Legislation', topic: 'Leasehold', status: 'Published', publishDate: '2026-01-27', closeDate: '', responseDate: '', updateDate: '', relatedIds: '5,20,21', notes: 'Ground rent cap; commonhold default', url: '' }, 
 { id: 23, title: 'Decade of Renewal: Jan 2026 Progress Update', type: 'Policy Paper', topic: 'Social Housing', status: 'Published', publishDate: '2026-01-28', closeDate: '', responseDate: '', updateDate: '', relatedIds: '1,2,3,4', notes: '', url: '' }, 
 { id: 24, title: 'New Decent Homes Standard: Policy Statement', type: 'Policy Paper', topic: 'Social Housing', status: 'Published', publishDate: '2026-01-28', closeDate: '', responseDate: '', updateDate: '', relatedIds: '2', notes: 'Final standard; 2035 deadline', url: '' }, 
 { id: 25, title: 'EHS Briefing: Modelling New DHS', type: 'Research', topic: 'Social Housing', status: 'Published', publishDate: '2026-01-28', closeDate: '', responseDate: '', updateDate: '', relatedIds: '2,24', notes: '45% SRS fail; 48% PRS fail', url: '' }, 
 { id: 28, title: 'Future Social Housing Rent Policy', type: 'Consultation', topic: 'Social Housing', status: 'Response Published', publishDate: '2024-10-30', closeDate: '2024-12-23', responseDate: '2026-01-28', updateDate: '', relatedIds: '3,1', notes: 'CPI+1% for 10 years confirmed', url: '' }, 
];
const typeOptions = ['Consultation', 'Call for Evidence', 'Policy Paper', 'Strategy', 'Guidance', 'Research', 'Draft Legislation'];
const topicOptions = ['Social Housing', 'Private Rented', 'Leasehold', 'Planning', 'Home Buying', 'Homelessness', 'Communities', 'Other'];
const statusOptions = ['Open', 'Awaiting Response', 'Response Published', 'Published', 'Updated'];
const typeConfig = { 
 'Consultation': { color: '#3b82f6', bg: '#dbeafe', icon: '📋' }, 
 'Call for Evidence': { color: '#6366f1', bg: '#e0e7ff', icon: '📢' }, 
 'Policy Paper': { color: '#10b981', bg: '#d1fae5', icon: '📄' }, 
 'Strategy': { color: '#14b8a6', bg: '#ccfbf1', icon: '🎯' }, 
 'Guidance': { color: '#f59e0b', bg: '#fef3c7', icon: '📖' }, 
 'Research': { color: '#8b5cf6', bg: '#ede9fe', icon: '📊' }, 
 'Draft Legislation': { color: '#ef4444', bg: '#fee2e2', icon: '⚖️' }, 
}; 
const statusConfig = { 
 'Open': { color: '#22c55e', label: 'Open' }, 
 'Awaiting Response': { color: '#f59e0b', label: 'Awaiting' }, 
 'Response Published': { color: '#6b7280', label: 'Responded' }, 
 'Published': { color: '#3b82f6', label: 'Published' }, 
 'Updated': { color: '#8b5cf6', label: 'Updated' }, 
}; 
const topicConfig = { 
 'Social Housing': '#3b82f6', 
 'Private Rented': '#ef4444', 
 'Leasehold': '#8b5cf6', 
 'Planning': '#10b981', 
 'Home Buying': '#f59e0b', 
 'Homelessness': '#ec4899', 
 'Communities': '#6366f1', 
 'Other': '#6b7280', 
}; 
export default function PersistentTracker() { 
 const [documents, setDocuments] = useState([]); 
 const [loading, setLoading] = useState(true); 
 const [view, setView] = useState('timeline'); 
 const [editingDoc, setEditingDoc] = useState(null); 
 const [showForm, setShowForm] = useState(false); 
 const [filterTopic, setFilterTopic] = useState('all'); 
 const [filterStatus, setFilterStatus] = useState('all'); 
 const [searchQuery, setSearchQuery] = useState(''); 
 const [selectedDoc, setSelectedDoc] = useState(null); 
 const [showImport, setShowImport] = useState(false); 
 const [lastSaved, setLastSaved] = useState(null); 
 const today = new Date('2026-01-29'); 
 useEffect(() => { 
 loadData(); 
 }, []); 
 const loadData = async () => { 
 try { 
 const result = await window.storage.get('mhclg-tracker-v2'); 
 if (result && result.value) { 
 setDocuments(JSON.parse(result.value)); 
 } else { 
 setDocuments(initialDocuments); 
 await saveData(initialDocuments); 
 } 
 } catch (e) { 
 setDocuments(initialDocuments); 
 } 
 setLoading(false); 
 }; 
 const saveData = async (docs) => { 
 try { 
 await window.storage.set('mhclg-tracker-v2', JSON.stringify(docs)); 
 setLastSaved(new Date()); 
 } catch (e) { 
 console.error('Failed to save:', e); 
 } 
 }; 
 const handleSaveDoc = async (doc) => { 
 let newDocs; 
 if (doc.id) { 
 newDocs = documents.map(d => d.id === doc.id ? doc : d); 
 } else { 
 const maxId = Math.max(...documents.map(d => d.id), 0); 
 doc.id = maxId + 1; 
 newDocs = [...documents, doc]; 
 } 
 setDocuments(newDocs); 
 await saveData(newDocs); 
 setShowForm(false); 
 setEditingDoc(null); 
 }; 
 const handleDeleteDoc = async (id) => { 
 if (confirm('Delete this document?')) { 
 const newDocs = documents.filter(d => d.id !== id); 
 setDocuments(newDocs); 
 await saveData(newDocs); 
 if (selectedDoc?.id === id) setSelectedDoc(null); 
 } 
 }; 
 const resetData = async () => { 
 if (confirm('Reset to default data?')) { 
 setDocuments(initialDocuments); 
 await saveData(initialDocuments); 
 } 
 }; 
 // Get related documents for a given doc 
 const getRelatedDocs = (doc) => { 
 if (!doc?.relatedIds) return []; 
 const ids = doc.relatedIds.split(',').map(id => parseInt(id.trim())).filter(Boolean); 
 return documents.filter(d => ids.includes(d.id)); 
 }; 
 // Deadline calculations 
 const getDeadlines = () => { 
 const openDocs = documents.filter(d => 
 (d.status === 'Open' || d.status === 'Awaiting Response') && d.closeDate 
 ); 
 return openDocs.map(d => { 
 const closeDate = new Date(d.closeDate); 
 const daysUntil = Math.ceil((closeDate - today) / (1000 * 60 * 60 * 24)); 
 return { ...d, daysUntil }; 
 }).filter(d => d.daysUntil > -30) // Include recently closed 
 .sort((a, b) => a.daysUntil - b.daysUntil); 
 }; 
 const deadlines = getDeadlines(); 
 const urgentDeadlines = deadlines.filter(d => d.daysUntil >= 0 && d.daysUntil <= 14); 
 // Timeline calculations 
 const startDate = new Date('2025-07-01'); 
 const endDate = new Date('2026-04-01'); 
 const totalDays = (endDate - startDate) / (1000 * 60 * 60 * 24); 
 const getPosition = (dateStr) => { 
 if (!dateStr) return null; 
 const date = new Date(dateStr); 
 if (date < startDate) return 0; 
 if (date > endDate) return 100; 
 return ((date - startDate) / (1000 * 60 * 60 * 24) / totalDays) * 100; 
 }; 
 const formatDate = (dateStr) => { 
 if (!dateStr) return '—'; 
 return new Date(dateStr).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: '2-digit' }); 
 }; 
 const getDaysSince = (dateStr) => { 
 if (!dateStr) return null; 
 return Math.floor((today - new Date(dateStr)) / (1000 * 60 * 60 * 24)); 
 }; 
 const months = []; 
 let current = new Date(startDate); 
 while (current <= endDate) { 
 months.push(new Date(current)); 
 current.setMonth(current.getMonth() + 1); 
 } 
 const todayPosition = getPosition(today.toISOString().split('T')[0]); 
 // Filter documents 
 const filteredDocs = documents 
 .filter(d => filterTopic === 'all' || d.topic === filterTopic) 
 .filter(d => filterStatus === 'all' || d.status === filterStatus) 
 .filter(d => { 
 if (!searchQuery) return true; 
 const q = searchQuery.toLowerCase(); 
 return d.title.toLowerCase().includes(q) || d.notes?.toLowerCase().includes(q); 
 }) 
 .sort((a, b) => new Date(a.publishDate) - new Date(b.publishDate)); 
 if (loading) { 
 return <div className="min-h-screen bg-gray-100 flex items-center justify-center">Loading...</div>; 
 } 
 return ( 
 <div className="min-h-screen bg-gray-100 p-3"> 
 {/* Header */} 
 <div className="bg-white rounded-lg shadow p-3 mb-3"> 
 <div className="flex items-center justify-between flex-wrap gap-2"> 
 <div> 
 <h1 className="text-lg font-bold text-gray-800">MHCLG Document Tracker</h1> 
 <p className="text-xs text-gray-500"> 
 {documents.length} documents 
 {lastSaved && ` • Saved ${lastSaved.toLocaleTimeString()}`} 
 </p> 
 </div> 
 <div className="flex gap-2 flex-wrap"> 
 <button onClick={() => { setEditingDoc(null); setShowForm(true); }} className="px-3 py-1.5 bg-blue-600 text-white rounded text-sm hover:bg-blue-700">+ Add</button> 
 <button onClick={() => setShowImport(true)} className="px-3 py-1.5 bg-purple-600 text-white rounded text-sm hover:bg-purple-700">📎 Import URL</button> 
 <button onClick={resetData} className="px-3 py-1.5 bg-gray-200 text-gray-700 rounded text-sm hover:bg-gray-300">Reset</button> 
 </div> 
 </div> 
 {/* Search and Filters */} 
 <div className="flex gap-3 mt-3 text-sm flex-wrap items-center"> 
 <input 
 type="text" 
 placeholder="Search titles & notes..." 
 value={searchQuery} 
 onChange={e => setSearchQuery(e.target.value)} 
 className="border rounded px-3 py-1 w-48" 
 /> 
 <select value={filterTopic} onChange={e => setFilterTopic(e.target.value)} className="border rounded px-2 py-1"> 
 <option value="all">All Topics</option> 
 {topicOptions.map(t => <option key={t} value={t}>{t}</option>)} 
 </select> 
 <select value={filterStatus} onChange={e => setFilterStatus(e.target.value)} className="border rounded px-2 py-1"> 
 <option value="all">All Status</option> 
 {statusOptions.map(s => <option key={s} value={s}>{s}</option>)} 
 </select> 
 <div className="flex border rounded overflow-hidden"> 
 <button onClick={() => setView('timeline')} className={`px-3 py-1 text-sm ${view === 'timeline' ? 'bg-blue-600 text-white' : 'bg-white'}`}>Timeline</button> 
 <button onClick={() => setView('list')} className={`px-3 py-1 text-sm ${view === 'list' ? 'bg-blue-600 text-white' : 'bg-white'}`}>List</button> 
 </div> 
 </div> 
 </div> 
 {/* Deadline Alerts */} 
 {urgentDeadlines.length > 0 && ( 
 <div className="bg-gradient-to-r from-amber-50 to-red-50 border border-amber-200 rounded-lg p-3 mb-3"> 
 <h3 className="font-bold text-amber-800 text-sm mb-2">⚠️ Upcoming Deadlines</h3> 
 <div className="flex gap-2 flex-wrap"> 
 {urgentDeadlines.map(d => ( 
 <button 
 key={d.id} 
 onClick={() => setSelectedDoc(d)} 
 className={`px-2 py-1 rounded text-xs font-medium border transition hover:scale-105 ${ 
 d.daysUntil <= 7 
 ? 'bg-red-100 border-red-300 text-red-800' 
 : 'bg-amber-100 border-amber-300 text-amber-800' 
 }`} 
 > 
 {d.daysUntil === 0 ? 'TODAY' : d.daysUntil === 1 ? '1 day' : `${d.daysUntil} days`}: {d.title.slice(0, 35)}... 
 </button> 
 ))} 
 </div> 
 </div> 
 )} 
 {/* URL Import Modal */} 
 {showImport && ( 
 <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"> 
 <ImportModal 
 onImport={handleSaveDoc} 
 onClose={() => setShowImport(false)} 
 /> 
 </div> 
 )} 
 {/* Document Form Modal */} 
 {showForm && ( 
 <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"> 
 <div className="bg-white rounded-lg shadow-xl p-4 w-full max-w-lg max-h-[90vh] overflow-y-auto"> 
 <h3 className="font-bold text-lg mb-3">{editingDoc ? 'Edit Document' : 'Add Document'}</h3> 
 <DocumentForm 
 doc={editingDoc} 
 onSave={handleSaveDoc} 
 onCancel={() => { setShowForm(false); setEditingDoc(null); }} 
 /> 
 </div> 
 </div> 
 )} 
 {/* Document Detail Panel */} 
 {selectedDoc && ( 
 <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setSelectedDoc(null)}> 
 <div className="bg-white rounded-lg shadow-xl p-4 w-full max-w-lg max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}> 
 <div className="flex justify-between items-start mb-3"> 
 <div> 
 <span className="text-2xl mr-2">{typeConfig[selectedDoc.type]?.icon}</span> 
 <span className="px-2 py-0.5 rounded text-white text-xs" style={{ backgroundColor: topicConfig[selectedDoc.topic] }}>{selectedDoc.topic}</span> 
 </div> 
 <button onClick={() => setSelectedDoc(null)} className="text-gray-400 hover:text-gray-600 text-xl">×</button> 
 </div> 
 <h2 className="font-bold text-lg text-gray-800 mb-2">{selectedDoc.title}</h2> 
 <div className="grid grid-cols-2 gap-2 text-sm mb-3"> 
 <div><span className="text-gray-500">Type:</span> {selectedDoc.type}</div> 
 <div><span className="text-gray-500">Status:</span> <span className="inline-flex items-center gap-1"><span className="w-2 h-2 rounded-full" style={{ backgroundColor: statusConfig[selectedDoc.status]?.color }}></span>{selectedDoc.status}</span></div> 
 <div><span className="text-gray-500">Published:</span> {formatDate(selectedDoc.publishDate)}</div> 
 <div><span className="text-gray-500">Closes:</span> {formatDate(selectedDoc.closeDate)}</div> 
 {selectedDoc.responseDate && <div><span className="text-gray-500">Response:</span> {formatDate(selectedDoc.responseDate)}</div>} 
 </div> 
 {selectedDoc.url ? ( 
 <a href={selectedDoc.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mb-3 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium"> 
 🔗 View on GOV.UK 
 <span className="text-blue-200">→</span> 
 </a> 
 ) : ( 
 <div className="mb-3 px-4 py-2 bg-gray-100 text-gray-400 rounded-lg inline-block text-sm"> 
 No URL added 
 </div> 
 )} 
 {selectedDoc.notes && ( 
 <div className="bg-gray-50 rounded p-2 mb-3 text-sm"> 
 <span className="text-gray-500">Notes:</span> {selectedDoc.notes} 
 </div> 
 )} 
 {/* Related Documents */} 
 {getRelatedDocs(selectedDoc).length > 0 && ( 
 <div className="border-t pt-3"> 
 <h4 className="font-medium text-sm text-gray-600 mb-2">Related Documents</h4> 
 <div className="space-y-1"> 
 {getRelatedDocs(selectedDoc).map(rel => ( 
 <button 
 key={rel.id} 
 onClick={() => setSelectedDoc(rel)} 
 className="w-full text-left p-2 rounded bg-blue-50 hover:bg-blue-100 transition text-sm flex items-center gap-2" 
 > 
 <span>{typeConfig[rel.type]?.icon}</span> 
 <span className="flex-grow truncate">{rel.title}</span> 
 <span className="px-1.5 py-0.5 rounded text-white text-xs" style={{ backgroundColor: topicConfig[rel.topic] }}>{rel.topic}</span> 
 </button> 
 ))} 
 </div> 
 </div> 
 )} 
 <div className="flex gap-2 mt-4"> 
 <button onClick={() => { setEditingDoc(selectedDoc); setShowForm(true); setSelectedDoc(null); }} className="px-3 py-1.5 bg-blue-600 text-white rounded text-sm">Edit</button> 
 <button onClick={() => handleDeleteDoc(selectedDoc.id)} className="px-3 py-1.5 bg-red-100 text-red-700 rounded text-sm">Delete</button> 
 </div> 
 </div> 
 </div> 
 )} 
 {/* Main Content */} 
 <div className="flex gap-3"> 
 <div className="flex-grow"> 
 {/* Timeline View */} 
 {view === 'timeline' && ( 
 <div className="bg-white rounded-lg shadow overflow-hidden"> 
 <div className="flex border-b bg-gray-50 sticky top-0 z-10"> 
 <div className="w-64 flex-shrink-0 px-3 py-2 border-r text-sm font-medium">Document</div> 
 <div className="flex-grow relative h-10"> 
 {months.map((m, i) => ( 
 <div key={i} className="absolute top-0 h-full border-l border-gray-200 flex items-center px-1 text-xs text-gray-600" 
 style={{ left: `${getPosition(m.toISOString().split('T')[0])}%` }}> 
 {m.toLocaleDateString('en-GB', { month: 'short', year: '2-digit' })} 
 </div> 
 ))} 
 <div className="absolute top-0 h-full w-0.5 bg-red-500 z-10" style={{ left: `${todayPosition}%` }}> 
 <span className="absolute -top-0 left-1 bg-red-500 text-white text-xs px-1 rounded">Today</span> 
 </div> 
 </div> 
 </div> 
 {filteredDocs.map((doc, idx) => { 
 const typeConf = typeConfig[doc.type] || typeConfig['Policy Paper']; 
 const statusConf = statusConfig[doc.status]; 
 const publishPos = getPosition(doc.publishDate); 
 const closePos = doc.closeDate ? getPosition(doc.closeDate) : null; 
 const responsePos = doc.responseDate ? getPosition(doc.responseDate) : null; 
 const isConsultation = doc.type === 'Consultation' || doc.type === 'Call for Evidence'; 
 return ( 
 <div key={doc.id} className={`flex border-b hover:bg-blue-50 cursor-pointer ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`} onClick={() => setSelectedDoc(doc)}>
 <div className="w-64 flex-shrink-0 px-3 py-2 border-r"> 
 <div className="flex items-start gap-2"> 
 <span className="text-sm">{typeConf.icon}</span> 
 <div className="flex-grow min-w-0"> 
 <div className="text-sm font-medium text-gray-800 truncate">{doc.title}</div> 
 <div className="flex items-center gap-2 mt-0.5 text-xs"> 
 <span className="px-1 py-0.5 rounded text-white" style={{ backgroundColor: topicConfig[doc.topic] }}>{doc.topic}</span> 
 <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: statusConf.color }}></span> 
 {doc.url && <span className="text-blue-500">🔗</span>} 
 </div> 
 </div> 
 </div> 
 </div> 
 <div className="flex-grow relative h-12"> 
 {months.map((m, i) => ( 
 <div key={i} className="absolute top-0 h-full border-l border-gray-100" style={{ left: `${getPosition(m.toISOString().split('T')[0])}%` }}></div> 
 ))} 
 <div className="absolute top-0 h-full w-0.5 bg-red-100" style={{ left: `${todayPosition}%` }}></div> 
 {isConsultation && closePos !== null ? ( 
 <> 
 <div className="absolute top-3 h-6 rounded" style={{ left: `${publishPos}%`, width: `${max(closePos - publishPos, 1)}%`, backgroundColor: typeConf.color }}></div> 
 {doc.status === 'Awaiting Response' && ( 
 <div className="absolute top-5 h-1 border-t-2 border-dashed border-amber-400" style={{ left: `${closePos}%`, width: `${todayPosition - closePos}%` }}></div> 
 )} 
 {responsePos && <div className="absolute top-3 w-3 h-3 rotate-45 bg-green-600" style={{ left: `${responsePos}%`, marginLeft: '-6px' }}></div>} 
 </> 
 ) : ( 
 <div className="absolute top-3 w-3 h-6 rounded" style={{ left: `${publishPos}%`, marginLeft: '-6px', backgroundColor: typeConf.color }}></div> 
 )} 
 </div> 
 </div> 
 ); 
 })} 
 </div> 
 )} 
 {/* List View */} 
 {view === 'list' && ( 
 <div className="bg-white rounded-lg shadow overflow-hidden"> 
 <table className="w-full text-sm"> 
 <thead className="bg-gray-50"> 
 <tr> 
 <th className="px-3 py-2 text-left">Title</th> 
 <th className="px-3 py-2 text-left">Topic</th> 
 <th className="px-3 py-2 text-left">Status</th> 
 <th className="px-3 py-2 text-left">Closes</th> 
 <th className="px-3 py-2 text-left">Link</th> 
 </tr> 
 </thead> 
 <tbody> 
 {filteredDocs.map((doc, idx) => ( 
 <tr key={doc.id} className={`${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-blue-50 cursor-pointer`} onClick={() => setSelectedDoc(doc)}> 
 <td className="px-3 py-2 font-medium">{typeConfig[doc.type]?.icon} {doc.title}</td> 
 <td className="px-3 py-2"><span className="px-1.5 py-0.5 rounded text-white text-xs" style={{ backgroundColor: topicConfig[doc.topic] }}>{doc.topic}</span></td> 
 <td className="px-3 py-2"><span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full" style={{ backgroundColor: statusConfig[doc.status]?.color }}></span>{doc.status}</span></td> 
 <td className="px-3 py-2">{formatDate(doc.closeDate)}</td> 
 <td className="px-3 py-2">{doc.url && <a href={doc.url} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()} className="text-blue-600 hover:underline">🔗</a>}</td> 
 </tr> 
 ))} 
 </tbody> 
 </table> 
 </div> 
 )} 
 </div> 
 </div> 
 {/* Stats */} 
 <div className="mt-3 grid grid-cols-5 gap-2"> 
 {[ 
 { label: 'Open', count: documents.filter(d => d.status === 'Open').length, color: 'text-green-600' }, 
 { label: 'Awaiting', count: documents.filter(d => d.status === 'Awaiting Response').length, color: 'text-amber-600' }, 
 { label: 'Responded', count: documents.filter(d => d.status === 'Response Published').length, color: 'text-gray-600' }, 
 { label: 'Published', count: documents.filter(d => d.status === 'Published' || d.status === 'Updated').length, color: 'text-blue-600' }, 
 { label: 'Total', count: documents.length, color: 'text-purple-600' }, 
 ].map(s => ( 
 <div key={s.label} className="bg-white rounded shadow p-2 text-center"> 
 <div className={`text-xl font-bold ${s.color}`}>{s.count}</div> 
 <div className="text-xs text-gray-500">{s.label}</div> 
 </div> 
 ))} 
 </div> 
 </div> 
 ); 
}
function ImportModal({ onImport, onClose }) { 
 const [url, setUrl] = useState(''); 
 const [loading, setLoading] = useState(false); 
 const [error, setError] = useState(''); 
 const [preview, setPreview] = useState(null); 
 const handleFetch = async () => { 
 if (!url.includes('gov.uk')) { 
 setError('Please enter a GOV.UK URL'); 
 return; 
 } 
 setLoading(true); 
 setError(''); 
 setPreview(null); 
 try { 
 const response = await fetch('https://api.anthropic.com/v1/messages', { 
 method: 'POST', 
 headers: { 
 'content-type': 'application/json', 
 'x-api-key': import.meta.env.VITE_ANTHROPIC_API_KEY || '', 
 'anthropic-version': '2023-06-01', 
 }, 
 body: JSON.stringify({ 
 model: 'claude-3-5-sonnet-20241022', 
 max_tokens: 1200, 
 messages: [{ 
 role: 'user', 
 content: `Visit ${url}\nExtract and return ONLY a JSON object exactly in this shape:\n{\n  "title": "...",\n  "type": "Consultation|Call for Evidence|Policy Paper|Strategy|Guidance|Research|Draft Legislation",\n  "topic": "Social Housing|Private Rented|Leasehold|Planning|Home Buying|Homelessness|Communities|Other",\n  "status": "Open|Published|Response Published|Updated",\n  "publishDate": "YYYY-MM-DD",\n  "closeDate": "YYYY-MM-DD or empty string",\n  "notes": "one line summary"\n}\nReturn ONLY the JSON.` 
 }], 
 }), 
 }); 
 const data = await response.json(); 
 const text = data?.content?.find(c => c.type === 'text')?.text || ''; 
 const match = text.match(/\{[\s\S]*\}/); 
 if (match) { 
 const parsed = JSON.parse(match[0]); 
 parsed.url = url; 
 setPreview(parsed); 
 } else { 
 setError('Could not extract document info'); 
 } 
 } catch (e) { 
 setError('Failed to fetch: ' + e.message); 
 } 
 setLoading(false); 
 }; 
 const handleConfirm = () => { 
 if (preview) { 
 onImport({ 
 ...preview, 
 responseDate: '', 
 updateDate: '', 
 relatedIds: '' 
 }); 
 onClose(); 
 } 
 }; 
 return ( 
 <div className="bg-white rounded-lg shadow-xl p-4 w-full max-w-md"> 
 <h3 className="font-bold text-lg mb-3">Import from GOV.UK</h3> 
 <div className="mb-3"> 
 <label className="block text-sm font-medium mb-1">GOV.UK URL</label> 
 <input 
 type="url" 
 value={url} 
 onChange={e => setUrl(e.target.value)} 
 placeholder="https://www.gov.uk/government/..." 
 className="w-full border rounded px-3 py-2 text-sm" 
 /> 
 </div> 
 {error && <p className="text-red-600 text-sm mb-3">{error}</p>} 
 {preview && ( 
 <div className="bg-green-50 border border-green-200 rounded p-3 mb-3 text-sm"> 
 <div className="font-medium mb-2">{preview.title}</div> 
 <div className="grid grid-cols-2 gap-1 text-xs text-gray-600"> 
 <div>Type: {preview.type}</div> 
 <div>Topic: {preview.topic}</div> 
 <div>Published: {preview.publishDate}</div> 
 <div>Closes: {preview.closeDate || '—'}</div> 
 </div> 
 {preview.notes && <div className="mt-2 text-xs">{preview.notes}</div>} 
 </div> 
 )} 
 <div className="flex gap-2 justify-end"> 
 <button onClick={onClose} className="px-4 py-2 border rounded hover:bg-gray-50">Cancel</button> 
 {preview ? ( 
 <button onClick={handleConfirm} className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">Add Document</button> 
 ) : ( 
 <button onClick={handleFetch} disabled={loading} className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 disabled:bg-gray-400"> 
 {loading ? 'Fetching...' : 'Fetch'} 
 </button> 
 )} 
 </div> 
 </div> 
 ); 
}
function DocumentForm({ doc, onSave, onCancel }) { 
 const [form, setForm] = useState(doc || { 
 title: '', type: 'Consultation', topic: 'Social Housing', status: 'Open', 
 publishDate: '', closeDate: '', responseDate: '', updateDate: '', relatedIds: '', notes: '', url: '' 
 }); 
 const handleSubmit = (e) => { 
 e.preventDefault(); 
 onSave(form); 
 }; 
 return ( 
 <form onSubmit={handleSubmit} className="space-y-3"> 
 <div> 
 <label className="block text-sm font-medium mb-1">Title *</label> 
 <input type="text" required value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} className="w-full border rounded px-3 py-2" /> 
 </div> 
 <div> 
 <label className="block text-sm font-medium mb-1">URL</label> 
 <input type="url" value={form.url} onChange={e => setForm({ ...form, url: e.target.value })} placeholder="https://www.gov.uk/..." className="w-full border rounded px-3 py-2" /> 
 </div> 
 <div className="grid grid-cols-2 gap-3"> 
 <div> 
 <label className="block text-sm font-medium mb-1">Type</label> 
 <select value={form.type} onChange={e => setForm({ ...form, type: e.target.value })} className="w-full border rounded px-3 py-2"> 
 {typeOptions.map(t => <option key={t} value={t}>{t}</option>)} 
 </select> 
 </div> 
 <div> 
 <label className="block text-sm font-medium mb-1">Topic</label> 
 <select value={form.topic} onChange={e => setForm({ ...form, topic: e.target.value })} className="w-full border rounded px-3 py-2"> 
 {topicOptions.map(t => <option key={t} value={t}>{t}</option>)} 
 </select> 
 </div> 
 </div> 
 <div> 
 <label className="block text-sm font-medium mb-1">Status</label> 
 <select value={form.status} onChange={e => setForm({ ...form, status: e.target.value })} className="w-full border rounded px-3 py-2"> 
 {statusOptions.map(s => <option key={s} value={s}>{s}</option>)} 
 </select> 
 </div> 
 <div className="grid grid-cols-2 gap-3"> 
 <div> 
 <label className="block text-sm font-medium mb-1">Published</label> 
 <input type="date" value={form.publishDate} onChange={e => setForm({ ...form, publishDate: e.target.value })} className="w-full border rounded px-3 py-2" /> 
 </div> 
 <div> 
 <label className="block text-sm font-medium mb-1">Closes</label> 
 <input type="date" value={form.closeDate} onChange={e => setForm({ ...form, closeDate: e.target.value })} className="w-full border rounded px-3 py-2" /> 
 </div> 
 </div> 
 <div className="grid grid-cols-2 gap-3"> 
 <div> 
 <label className="block text-sm font-medium mb-1">Response</label> 
 <input type="date" value={form.responseDate} onChange={e => setForm({ ...form, responseDate: e.target.value })} className="w-full border rounded px-3 py-2" /> 
 </div> 
 <div> 
 <label className="block text-sm font-medium mb-1">Related IDs</label> 
 <input type="text" value={form.relatedIds} onChange={e => setForm({ ...form, relatedIds: e.target.value.replace(/[^0-9,\s]/g, '') })} placeholder="1,2,3" className="w-full border rounded px-3 py-2" /> 
 </div> 
 </div> 
 <div> 
 <label className="block text-sm font-medium mb-1">Notes</label> 
 <textarea value={form.notes} onChange={e => setForm({ ...form, notes: e.target.value })} className="w-full border rounded px-3 py-2" rows={2} /> 
 </div> 
 <div className="flex gap-2 justify-end"> 
 <button type="button" onClick={onCancel} className="px-4 py-2 border rounded hover:bg-gray-50">Cancel</button> 
 <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Save</button> 
 </div> 
 </form> 
 ); 
}
