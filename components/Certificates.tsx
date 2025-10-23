"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import certificateImg from "@/assets/certificate.png";

// Hard-coded list of certificate files in public/certificates
const certificates = [
  { id: 1, name: "Certificate of Participation", file: "/certificates/Certificate of Participation_UWU_XTREME.jpg" },
  { id: 2, name: "Dean List", file: "/certificates/DeanList_Semester_100_I.JPG" },
  { id: 3, name: "HTML Certificate", file: "/certificates/Html.png" },
  { id: 4, name: "Java Certificate", file: "/certificates/Java .png" },
  { id: 5, name: "Python Certificate", file: "/certificates/Python_for_Beginners_E-Certificate.PNG" },
  { id: 6, name: "SQL Certificate", file: "/certificates/SQL.png" },
];

const Certificates: React.FC = () => {
  const [open, setOpen] = useState(false);
  // 'interested' feature removed per request — will keep component lean for side-by-side cards

  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  return (
    <div>
      {/* Compact neat card used in About */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.02, y: -4 }}
        className="w-full lg:w-1/3 cursor-pointer group p-6 rounded-xl border-[3px] border-gray-300 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-blue-500/10 dark:hover:shadow-blue-500/20"
        onClick={openModal}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => { if (e.key === 'Enter') openModal(); }}
      >
        <div className="relative flex gap-4 items-start">
          <div className="space-y-2 w-full">
            <div className="flex gap-4 items-center">
              <motion.div 
                className="p-3 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-500 shadow-md" 
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-8 h-8">
                  <Image src={certificateImg} alt="certificate" width={32} height={32} className="object-contain" />
                </div>
              </motion.div>
              <h3 className="text-xl sm:text-2xl font-semibold bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:to-indigo-600 transition-all duration-300">
                Certificates
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 pl-[52px] group-hover:text-gray-800 dark:group-hover:text-gray-300 transition-colors duration-300">
              View my professional certifications and achievements ({certificates.length} certificates)
            </p>
          </div>
        </div>
      </motion.div>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4" onClick={closeModal}>
          <motion.div
            initial={{ scale: 0.98, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white dark:bg-gray-900 w-full max-w-4xl rounded-lg p-4 sm:p-6 shadow-xl overflow-auto max-h-[80vh]"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Certificates</h3>
              <button onClick={closeModal} className="text-sm px-3 py-1.5 rounded-md border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200">Close</button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {certificates.map((cert, index) => {
                const isImage = cert.file.match(/\.(jpe?g|png|gif|webp|svg)$/i);
                return (
                  <motion.div 
                    key={cert.id} 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.03, y: -4 }}
                    className="border-2 border-gray-200 dark:border-gray-800 rounded-xl p-4 bg-white dark:bg-gray-800/50 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-blue-500/20 dark:hover:shadow-blue-500/30 cursor-pointer group"
                  >
                    <div className="flex items-start gap-4">
                      <motion.div 
                        className="w-24 h-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 rounded-lg overflow-hidden flex items-center justify-center border border-gray-200 dark:border-gray-700 group-hover:border-blue-400 dark:group-hover:border-blue-500 transition-all duration-300"
                        whileHover={{ scale: 1.08 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {isImage ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img src={encodeURI(cert.file)} alt={cert.name} className="object-contain w-full h-full p-1" />
                        ) : (
                          <div className="text-sm text-gray-600 dark:text-gray-300 p-2 font-semibold">PDF</div>
                        )}
                      </motion.div>

                      <div className="flex-1 flex flex-col gap-3">
                        <div>
                          <div className="font-semibold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">{cert.name}</div>
                          <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">{cert.file.split('/').pop()}</div>
                        </div>

                        <div className="flex items-center gap-2">
                          <motion.a 
                            href={encodeURI(cert.file)} 
                            target="_blank" 
                            rel="noreferrer" 
                            className="px-4 py-1.5 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-medium hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 shadow-md hover:shadow-lg"
                            whileHover={{ scale: 1.08 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={(e) => e.stopPropagation()}
                          >
                            View
                          </motion.a>
                          <motion.a 
                            href={encodeURI(cert.file)} 
                            download 
                            className="px-4 py-1.5 rounded-lg border-2 border-gray-300 dark:border-gray-600 text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-200"
                            whileHover={{ scale: 1.08 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={(e) => e.stopPropagation()}
                          >
                            Download
                          </motion.a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Certificates;
